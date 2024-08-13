import React from "react";
import styles from "./Home.module.css";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar />
            <section id="skills">
                <Skills/>
            </section>
            <section id="about" >
                <About/>
            </section>
            <section id="experience" >
                <Experience/>
            </section>
            <section id="contact" >
                <Contact/>
            </section>
        </div>
    );
}

export default Home;