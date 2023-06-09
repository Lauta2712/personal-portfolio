import React from "react";
import styles from "./Home.module.css";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Home;