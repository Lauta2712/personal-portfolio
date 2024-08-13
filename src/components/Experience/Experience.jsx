import React from 'react';
import styles from './Experience.module.css'; 
import countries from "../../img/WhatsApp Image 2023-06-07 at 20.02.27.jpeg";
import byteme from "../../img/WhatsApp Image 2023-06-07 at 20.02.28.jpeg";
import rickandmorty from "../../img/rick&morty.jpg";
import revistahabitat from "../../img/WhatsApp Image 2023-06-15 at 12.36.03.jpeg";

const Experience = () => {
  return (
    <div className={styles.container}>

      <div>
        <h1>Experiencia</h1>
        <div className={styles.gridItem}>
          <div >
          Byte Me
          <p>
            Tienda online sobre productos informáticos que incluía: landing
                page, búsquedas, filtrados combinados, ordenamientos, formulario
                para crear productos, autenticación de terceros, notificaciones
                vía mail, paginado, dashboard de administrador para hacer gestión
                y borrado lógico tanto de productos como de usuarios, pasarela de
                pagos, reviews, localStorage, Cloudinary
          </p>
          </div>
          <div >
            <img src={byteme} alt="" />
          </div>
        </div>

        <div className={styles.gridItem}>
          <div >
            <img src={countries} alt="" />
          </div>
          <div >
          Countries
          <p>
          Diseñar y desarrollar una App de países que incluía: landing
                page, búsquedas, filtrados combinados, ordenamientos, formulario
                para crear actividades turísticas en la base de datos, paginado,
                etc. Tecnologías utilizadas Front: HTML, CSS, React, Redux. Back:
                Express, Node. Base de datos: PostgreSQL y Sequelize.
          </p>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div >
          Rick And Morty
              <p>
              Diseñar y desarrollar una App de la serie de televisión Rick And Morty que incluía: loggin, búsquedas, posibilidad de agregar favoritos, ordenamientos, paginado, etc. 
              Tecnologías utilizadas:
              Front: HTML, CSS, React, Redux.
              Back: Express, Node.
              Base de datos: PostgreSQL y Sequelize.
              </p>
          </div>
          <div >
            <img src={rickandmorty} alt="" />
          </div>
        </div>

      </div>   

    </div>
  );
};

export default Experience;