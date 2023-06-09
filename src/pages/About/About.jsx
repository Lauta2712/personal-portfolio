import React from "react";
import styles from "./About.module.css"

const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.english}>
                <h2>About</h2>
                <p>Hello! My name is Lautaro Rodriguez, and I am a Full Stack Developer with a background in Industrial Engineering. My engineering studies have helped me develop problem-solving skills and perseverance in achieving my goals, particularly in the Back-End specialization. I have knowledge of agile methodologies (Scrum) and I am accustomed to working in a team environment.

I have experience in Front-End and Back-End development using GIT, HTML, Javascript, data structures, algorithms, CSS, CSS frameworks, React.js, Redux, Node.js, Express, SQL, and Sequelize. I consider myself an adaptable person with creativity, critical thinking, and curiosity. I am full of energy and always eager to learn new things, with a strong desire to grow both personally and professionally.</p>
            </div>
            <div className={styles.spanish}>
                <h2>Acerca de Lautaro</h2>
                <p>Hola! Mi nombre es Lautaro Rodriguez, soy Full Stack Developer con background como estudiante de Ingeniería Industrial, ayudándome a desarrollar la lógica ante la resolución de un problema y la perseverancia para conseguir mis objetivos, especializado en Back-End. Poseo conocimientos en metodologías ágiles (Scrum) y estoy muy acostumbrado al trabajo en equipo. Tengo experiencia en desarrollo de Front End y Back End con: GIT, HTML, Javascript, estructura de datos, algoritmos, CSS, frameworks CSS, React.js, Redux, Node.js, Express, SQL, Sequelize. Me considero una persona con adaptabilidad, creatividad, pensamiento crítico y curiosidad. Soy una persona con mucha energía e inquieta, que siempre está buscando aprender cosas nuevas pero sobre todo con muchas ganas de seguir creciendo tanto en lo personal como también en el ámbito profesional.</p>
            </div>
        </div>
    )
}

export default About;