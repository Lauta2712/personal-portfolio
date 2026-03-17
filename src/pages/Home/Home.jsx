import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroContent from "../../components/HeroContent/HeroContent";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import LazyLoadComponent from "../../components/LazyLoadComponent/LazyLoadComponent";
import Services from "../../components/Services/Services";
import ContactForm from "../../components/ContactForm/ContactForm";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <div className="home-container">           
            <Navbar />
            <HeroContent />
            <LazyLoadComponent>
                <About />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Projects />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Experience />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Services />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <Skills />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <ContactForm/>
            </LazyLoadComponent>
            <Footer />
        </div>
    );
}

export default Home;