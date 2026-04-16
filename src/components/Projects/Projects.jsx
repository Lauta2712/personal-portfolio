import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import pulsoImg from "../../assets/pulso.jpg";
import coneqImg from "../../assets/coneq.jpg";
import cruxImg from "../../assets/crux.jpg";

const projectMeta = [
  {
    id: "pulso",
    stack: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    image: pulsoImg,
    liveUrl: "https://www.pulsostudio.site/"
  },
  {
    id: "coneq",
    stack: ["React", "CSS", "EmailJS"],
    image: coneqImg,
    liveUrl: "https://www.coneq.com.ar/"
  },
  {
    id: "crux",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "React Router", "React QR Code", "jsQR"],
    image: cruxImg,
    liveUrl: "https://cruxescalada-admin.vercel.app/"
  },
  {
    id: "mpscaper",
    stack: ["Node.js", "Playwright", "ESModules"],
    image: null,
    liveUrl: "https://github.com/Lauta2712/mountain-project-scraper"
  }
];

const DESKTOP_ITEMS = 3;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

const Projects = () => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const total = projectMeta.length;
  const itemsPerPage = isDesktop ? DESKTOP_ITEMS : 1;
  const totalPages = Math.ceil(total / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  // Reset to first card when switching breakpoints
  useEffect(() => {
    setCurrentIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, [isDesktop]);

  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    const center = track.offsetWidth / 2;
    track.scrollTo({ left: card.offsetLeft + card.offsetWidth / 2 - center, behavior: "smooth" });
  };

  const goToPage = (page) => {
    const newIndex = page * itemsPerPage;
    setCurrentIndex(newIndex);
    if (!isDesktop) scrollToCard(newIndex);
  };

  // Sync dots on mobile swipe
  useEffect(() => {
    if (isDesktop) return;
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = cards.indexOf(entry.target);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t("projects.sectionTitle")}</h2>
      <p className="projects-intro">{t("projects.intro")}</p>

      <div className={`projects-track${isDesktop ? " projects-track--grid" : ""}`} ref={trackRef}>
        {projectMeta.map((project, i) => {
          const cardPage = Math.floor(i / DESKTOP_ITEMS);
          const isHidden = isDesktop && cardPage !== currentPage;
          const bullets = t(`projects.${project.id}.bullets`, { returnObjects: true });
          const bulletsList = Array.isArray(bullets) ? bullets : [];

          return (
            <article
              key={project.id}
              className={`project-card${isHidden ? " project-card--hidden" : ""}`}
            >
              <div
                className={`project-preview project-preview--${project.id}`}
                style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              >
                <div className="project-preview-overlay">
                  <span className="project-preview-title">
                    {t(`projects.${project.id}.title`)}
                  </span>
                  <div className="project-tech-chips">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="project-title">{t(`projects.${project.id}.title`)}</h3>
              <p className="project-role">{t(`projects.${project.id}.role`)}</p>
              <p className="project-description">{t(`projects.${project.id}.description`)}</p>

              <ul className="project-bullets">
                {bulletsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {project.liveUrl && (
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t("projects.viewProject")}
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="carousel-nav">
        <button
          className="carousel-arrow"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === currentPage ? " carousel-dot--active" : ""}`}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-arrow"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;
