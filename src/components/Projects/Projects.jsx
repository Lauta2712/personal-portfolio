import React, { useState } from "react";
import styles from "./Projects.module.css";
import countries from "../../img/WhatsApp Image 2023-06-07 at 20.02.27.jpeg";
import byteme from "../../img/WhatsApp Image 2023-06-07 at 20.02.28.jpeg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectName) => {
    setHoveredProject(projectName);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className={styles.projectsContainer}>
      <h3> Top Projects</h3>
      <div className={styles.projects}>
        <a
          href="https://byte-me-front.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.projectsItems} ${
            hoveredProject === "byteMe" ? styles.flipped : ""
          }`}
          onMouseEnter={() => handleMouseEnter("byteMe")}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.front}>
            <h5>Byte Me</h5>
            <img src={byteme} alt="Byte Me" />
          </div>
          <div className={styles.back}>
            <p> Tienda online sobre productos
informáticos que incluía: landing page, búsquedas, filtrados
combinados, ordenamientos, formulario para crear productos,
autenticación de terceros, notificaciones vía mail, paginado,
dashboard de administrador para hacer gestión y borrado
lógico tanto de productos como de usuarios, pasarela de
pagos, reviews, localStorage, Cloudinary</p>
          </div>
        </a>

        <a
          href="https://github.com/Lauta2712/Countries_PI"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.projectsItems} ${
            hoveredProject === "countries" ? styles.flipped : ""
          }`}
          onMouseEnter={() => handleMouseEnter("countries")}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.front}>
            <h5>Countries</h5>
            <img src={countries} alt="Countries" />
          </div>
          <div className={styles.back}>
            <p>Diseñar y desarrollar una App de países que incluía: landing page, búsquedas, filtrados combinados, ordenamientos, formulario para crear actividades turísticas en la base de datos, paginado, etc. Tecnologías utilizadas Front: HTML, CSS, React, Redux. Back: Express, Node. Base de datos: PostgreSQL y Sequelize.</p>
          </div>
        </a>

        {/* Uncomment the code below to add more projects */}
        {/* <div className={`${styles.projectsItems} ${isFlipped ? styles.flipped : ""}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
          <div className={styles.front}>
            <h5>Rick And Morty</h5>
            <img src={rickandmorty} alt="Rick And Morty" />
          </div>
          <div className={styles.back}>
            <p>Project details for Rick And Morty</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;