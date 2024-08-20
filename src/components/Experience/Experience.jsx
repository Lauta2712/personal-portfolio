import React from "react";
import "./Experience.css";
import { FaCode, FaStore, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-item">
        <div className="experience-header">
          <FaCode className="experience-icon" /> 
          <div className="experience-details">
            <h3>Full Stack Developer</h3>
            <p>ANT Automation</p>
          </div>
          <FaCalendarAlt className="calendar-icon" />
          <p className="experience-date">Jul 2023 - Actualidad</p>
        </div>
        <ul>
          <li>Desarrollar dashboards, plugins y aplicaciones online utilizando Javascript, React, Redux, Material UI, KendoUI, Highcharts, CSS, C#, .NET, Entity Framework, SQL, SQL Server, Sequelize.</li>
          <li>Diseñar interfaces y elementos frontend, mantener y optimizar sitios web existentes.</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <FaCode className="experience-icon" />
          <div className="experience-details">
            <h3>Front End Developer</h3>
            <p>QXM</p>
          </div>
          <FaCalendarAlt className="calendar-icon" />
          <p className="experience-date">Sep 2023 - Dic 2023</p>
        </div>
        <ul>
          <li>Desarrollo de landing pages, dashboards, creación de plugins, mejoras, etc.</li>
          <li>Frontend: Javascript, React, SASS, Bootstrap.</li>
          <li>Backend: NextJS, SQL.</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <FaStore className="experience-icon" /> 
          <div className="experience-details">
            <h3>Encargado de Local</h3>
            <p>Almacen Meat MARKET</p>
          </div>
          <FaCalendarAlt className="calendar-icon" />
          <p className="experience-date">Ago 2022 - Nov 2022</p>
        </div>
        <ul>
          <li>Encargado de la apertura y cierre del local.</li>
          <li>Encargado de la caja (apertura y cierre de caja).</li>
          <li>Atención al cliente y control de personal.</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <FaCode className="experience-icon" /> 
          <div className="experience-details">
            <h3>Full Stack Web Developer</h3>
            <p>Byte Me</p>
            <p>Experiencia Académica | Henry Bootcamp</p>
          </div>
          <FaCalendarAlt className="calendar-icon" />
          <p className="experience-date">May 2023 - Jun 2023</p>
        </div>
        <ul>
          <li>Desarrollo de un sitio web de ecommerce para productos tecnológicos.</li>
          <li>Participación en la creación de landing pages, búsquedas, filtrados combinados, ordenamientos, y formularios para crear productos.</li>
          <li>Implementación de autenticación de terceros, notificaciones por mail, paginado, dashboard de administrador para la gestión de productos y usuarios, y pasarela de pagos.</li>
          <li>Frontend: HTML, CSS, React, Redux, Auth0, Stripe.</li>
          <li>Backend: Express, Node, Nodemailer, Cloudinary, Stripe.</li>
          <li>Base de datos: PostgreSQL, Sequelize.</li>
        </ul>
      </div>
      {/* <div className="experience-item">
        <div className="experience-header">
          <FaCode className="experience-icon" /> 
          <div className="experience-details">
            <h3>Experiencia Académica</h3>
            <p>Henry Bootcamp</p>
          </div>
          <FaCalendarAlt className="calendar-icon" />
          <p className="experience-date">Fecha de finalización</p>
        </div>
        <ul>
          <li>Participación en proyectos académicos relacionados con el desarrollo web full stack.</li>
          <li>Aprendizaje de tecnologías clave y desarrollo de habilidades prácticas en el contexto de bootcamp.</li>
        </ul>
      </div> */}
    </section>
  );
};

export default Experience;