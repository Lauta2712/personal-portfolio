import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroContent from "../../components/HeroContent/HeroContent";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import LazyLoadComponent from "../../components/LazyLoadComponent/LazyLoadComponent";

const Home = () => {
    return (
        <div className="home-container">           
            <Navbar />
            <HeroContent />
            <About />
            <LazyLoadComponent>
                <Experience />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Skills />
            </LazyLoadComponent>
            <Footer />
        </div>
    );
}

export default Home;