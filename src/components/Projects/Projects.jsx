import React, { useState } from "react";
import styles from "./Projects.module.css";
import countries from "../../img/WhatsApp Image 2023-06-07 at 20.02.27.jpeg";
import byteme from "../../img/WhatsApp Image 2023-06-07 at 20.02.28.jpeg";
import rickandmorty from "../../img/rick&morty.jpg";
import revistahabitat from "../../img/WhatsApp Image 2023-06-15 at 12.36.03.jpeg";

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
            <img src={byteme} alt="Byte Me" className={styles.img}/>
          </div>
          <div className={styles.back}>
            <p>
              Tienda online sobre productos informáticos que incluía: landing
              page, búsquedas, filtrados combinados, ordenamientos, formulario
              para crear productos, autenticación de terceros, notificaciones
              vía mail, paginado, dashboard de administrador para hacer gestión
              y borrado lógico tanto de productos como de usuarios, pasarela de
              pagos, reviews, localStorage, Cloudinary
            </p>
          </div>
        </a>

        <a
          href="https://countriesclient.onrender.com"
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
            <img src={countries} alt="Countries" className={styles.img}/>
          </div>
          <div className={styles.back}>
            <p>
              Diseñar y desarrollar una App de países que incluía: landing
              page, búsquedas, filtrados combinados, ordenamientos, formulario
              para crear actividades turísticas en la base de datos, paginado,
              etc. Tecnologías utilizadas Front: HTML, CSS, React, Redux. Back:
              Express, Node. Base de datos: PostgreSQL y Sequelize.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/Lauta2712/Rick_and_Morty_correcto"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.projectsItems} ${
            hoveredProject === "revistaHabitat" ? styles.flipped : ""
          }`}
          onMouseEnter={() => handleMouseEnter("revistaHabitat")}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.front}>
            <h5>Rick And Morty</h5>
            <img src={rickandmorty} alt="Revista Habitat" className={styles.img}/>
          </div>
          <div className={styles.back}>
            <p>
              Diseñar y desarrollar una App de la serie de televisión Rick And Morty que incluía: loggin, búsquedas, posibilidad de agregar favoritos, ordenamientos, paginado, etc. 
              Tecnologías utilizadas:
              Front: HTML, CSS, React, Redux.
              Back: Express, Node.
              Base de datos: PostgreSQL y Sequelize.
            </p>
          </div>
        </a>

        <a
          href="https://revista-habitat.vercel.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.projectsItems} ${
            hoveredProject === "rickAndMorty" ? styles.flipped : ""
          }`}
          onMouseEnter={() => handleMouseEnter("rickAndMorty")}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.front}>
            <h5>Revista Hábitat</h5>
            <img src={revistahabitat} alt="Rick And Morty" className={styles.img}/>
          </div>
          <div className={styles.back}>
            <p>
              Revista Habitat fue el primer proyecto que realicé iniciando mi camino en el mundo de la programación, proyecto en el cuál me inspiré desde algo muy simple sobre lo que todos deberíamos ser conscientes: Cuidar el Mundo en el que vivimos.
              Tecnologías utilizadas:
              HTML, CSS, Bootstrap, Sass, Git, GitHub 
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;