import React from "react";
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
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "React Router",
      "React QR Code",
      "jsQR"
    ],
    image: cruxImg,
    liveUrl: "https://cruxescalada-admin.vercel.app/"
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t("projects.sectionTitle")}</h2>
      <p className="projects-intro">{t("projects.intro")}</p>

      <div className="projects-grid">
        {projectMeta.map((project) => {
          const bullets = t(`projects.${project.id}.bullets`, { returnObjects: true });
          const bulletsList = Array.isArray(bullets) ? bullets : [];
          return (
            <article key={project.id} className="project-card">
              <div
                className={`project-preview project-preview--${project.id}`}
                style={
                  project.image
                    ? { backgroundImage: `url(${project.image})` }
                    : undefined
                }
              >
                <div className="project-preview-overlay">
                  <span className="project-preview-title">
                    {t(`projects.${project.id}.title`)}
                  </span>
                  <div className="project-tech-chips">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="project-title">{t(`projects.${project.id}.title`)}</h3>
              <p className="project-role">{t(`projects.${project.id}.role`)}</p>
              <p className="project-description">
                {t(`projects.${project.id}.description`)}
              </p>

              <ul className="project-bullets">
                {bulletsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
