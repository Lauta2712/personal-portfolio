import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGit, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiExpress, SiPostgresql, SiSequelize, SiCsharp, SiCplusplus, SiSass, SiScrumalliance } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li><FaHtml5 /></li>
        <li><FaCss3Alt /></li>
        <li><FaJsSquare /></li>
        <li><FaReact /></li>
        <li><SiRedux /></li>
        <li><FaNode /></li>
        <li><SiExpress /></li>
        <li><SiPostgresql /></li>
        <li>SQL</li>
        <li><SiSequelize /></li>
        <li>Scrum</li>
        <li><FaGit /></li>
        <li><FaBootstrap /></li>
        {/* <li><SiSass /> SASS</li> */}
        <li>Material UI</li>
        <li>C</li>
        <li><SiCplusplus /> </li>
        <li><SiCsharp /> </li>
      </ul>
    </section>
  );
}

export default Skills;