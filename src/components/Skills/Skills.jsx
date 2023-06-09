import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
    return(
        <div className={styles.skills}>
            <ul className={styles.list}>
                <li className={styles.items}>Javascript</li>
                <li className={styles.items}>React</li>
                <li className={styles.items}>Redux</li>
                <li className={styles.items}>Express</li>
                <li className={styles.items}>Node.js</li>
                <li className={styles.items}>Sequelize</li>
                <li className={styles.items}>PostgreSQL</li>
                <li className={styles.items}>Scrum</li>
                <li className={styles.items}>SQL</li>
            </ul>
        </div>
    )
}

export default Skills;