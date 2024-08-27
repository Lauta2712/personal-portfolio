import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGit, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiExpress, SiPostgresql, SiSequelize, SiCsharp, SiCplusplus, SiDocker } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: "SQL", name: "SQL" },
    { icon: <SiSequelize />, name: "Sequelize" },
    { icon: "Scrum", name: "Scrum" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiDocker />, name: "Docker" },  
    { icon: "Material UI", name: "Material UI" },
    { icon: "C", name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiCsharp />, name: "C#" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;