import React, { useState } from "react";
import styles from "./Skills.module.css";
import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";
// import JS from "../../icons/js.png";


const Skills = () => {
  const skillsList = [
    "Javascript",
    "React",
    "Redux",
    "Express",
    "Node.js",
    "Sequelize",
    "PostgreSQL",
    "Scrum",
    "SQL",
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 5;
    if (nextIndex < skillsList.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 5;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <div className={styles.skills}>
        <button onClick={handlePrev} className={styles.carouselButton}>&lt;</button>

        <ul className={styles.list}>
            {skillsList.slice(startIndex, startIndex + 5).map((skill, index) => (
            <li key={index} className={styles.items}>
                {skill}
                <i src={JS}></i>
            </li>
            ))}
        </ul>

        <button onClick={handleNext} className={styles.carouselButton}>&gt;</button>
    </div>
  );
};

export default Skills;