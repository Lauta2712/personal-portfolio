import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div >
        <h2>Hola! Mi nombre es Lautaro Rodriguez</h2>
      </div>
      <p>
        Soy Full Stack Developer con background como estudiante de Ingeniería
        Industrial, ayudándome a desarrollar la lógica ante la resolución de un
        problema y la perseverancia para conseguir mis objetivos. Poseo
        conocimientos en metodologías ágiles (Scrum) y estoy muy acostumbrado al
        trabajo en equipo. Tengo experiencia en desarrollo de Front End y Back
        End con: GIT, HTML, Javascript, estructura de datos, algoritmos, CSS,
        frameworks CSS, React.js, Redux, Node.js, Express, SQL, Sequelize. Me
        considero una persona con adaptabilidad, creatividad, pensamiento
        crítico, responsabilidad y curiosidad. Soy una persona con mucha energía
        e inquieta, que siempre está buscando aprender cosas nuevas pero sobre
        todo con muchas ganas de seguir creciendo tanto en lo personal como
        también en el ámbito profesional.
      </p>
    </div>
  );
};

export default About;