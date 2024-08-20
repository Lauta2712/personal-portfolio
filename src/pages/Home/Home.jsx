import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroContent from "../../components/HeroContent/HeroContent";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div className="home-container">           
            <Navbar />
            <HeroContent />
            <About />
            <Experience/>
            <Skills/>
            <Footer />
        </div>
    );
}

export default Home;