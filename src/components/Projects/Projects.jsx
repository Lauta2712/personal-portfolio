import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Byte Me</h3>
        <p>Full Stack Web Developer</p>
        <p>May 2023 - Jun 2023</p>
        <ul>
          <li>Desarrollo de una aplicación web de proyectos relacionados con la alimentación y la salud.</li>
          <li>Frontend: HTML, CSS, React, Redux, Auth0, Stripe.</li>
          <li>Backend: Express, NodeMailer, Cloudinary, Stripe.</li>
          <li>Base de datos: PostgreSQL y Sequelize.</li>
        </ul>
        <a href="https://byte-me-front.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="https://github.com/byteproject" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Projects;