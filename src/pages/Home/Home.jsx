import React from "react";
import styles from "./Home.module.css";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
// import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Lautaro Rodriguez</h1>
            <h2 className={styles.fullstack}>Full Stack Developer</h2>
            <Skills/>
            <Projects/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home;