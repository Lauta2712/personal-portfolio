import React from "react";
import "./HeroContent.css";

const HeroContent = () => {
    return (
        <main id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Hola! soy <span className="highlight">Lautaro Rodriguez</span></h1>
                <h2>Full Stack Developer</h2>
                {/* <button className="contact-button">Contact</button> */}
            </div>
        </main>
    );
}

export default HeroContent;