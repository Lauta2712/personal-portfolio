import React from "react";
import "./Projects.css";

const projects = [
  {
    id: "pulso",
    title: "Pulso Studio",
    role: "Co-Founder · Full Stack Developer",
    description:
      "Estudio digital que ayuda a profesionales y negocios a traducir su propuesta de valor en sitios web claros, modernos y fáciles de mantener.",
    bullets: [
      "Definición de la estructura de contenido y mensajes clave junto al cliente.",
      "Diseño y desarrollo de sitios web y landing pages orientadas a conseguir contactos y reservas.",
      "Integración de formularios, automatizaciones de correo y analítica básica para entender el comportamiento de los usuarios."
    ],
    stack: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    image: "/img/projects/pulso-studio.png",
    liveUrl: "https://pulso-studio.vercel.app/"
  },
  {
    id: "coneq",
    title: "Coneq",
    role: "Full Stack Developer",
    description:
      "Sitio corporativo para una empresa de ingeniería y construcción, enfocado en transmitir confianza y mostrar sus proyectos de forma clara.",
    bullets: [
      "Arquitectura de información para secciones de servicios, proyectos y contacto.",
      "Implementación de un diseño responsive consistente con la identidad visual de la empresa.",
      "Ajustes de rendimiento y SEO on-page (metadatos, estructura semántica, buenas prácticas)."
    ],
    stack: ["React", "CSS", "EmailJS"],
    image: "/img/projects/coneq.png",
    liveUrl: "https://www.coneq.com.ar/"
  },
  {
    id: "crux",
    title: "Crux Escalada · Sistema de horarios",
    role: "Full Stack Developer",
    description:
      "Aplicación web interna para que un gimnasio de escalada pueda gestionar sus horarios, cupos y asistencias de forma centralizada.",
    bullets: [
      "Gestión de turnos y cupos por franja horaria directamente desde el navegador.",
      "Panel para administración de usuarios y registro de asistencias.",
      "Uso de códigos QR para agilizar el ingreso y control diario por parte del staff."
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "React Router",
      "React QR Code",
      "jsQR"
    ],
    image: "/img/projects/crux-horarios.png",
    liveUrl: "https://cruxescalada-admin.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Proyectos destacados</h2>
      <p className="projects-intro">
        Algunos de los proyectos en los que trabajé recientemente, combinando
        desarrollo, diseño y foco en el negocio.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
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
                <span className="project-preview-title">{project.title}</span>
                <div className="project-tech-chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-role">{project.role}</p>
            <p className="project-description">{project.description}</p>

            <ul className="project-bullets">
              {project.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="project-stack">{project.stack}</p>

            <div className="project-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver proyecto
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;