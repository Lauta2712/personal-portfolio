import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profileImage from "../../img/Lautaro.jpeg";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className="navbar-container">
                <div className="hero-image">
                    <img src={profileImage} alt="Profile" className="profile-img" />
                </div>
                {isMobile ? (
                    <>
                        <aside className={`sidebar ${navOpen ? "open" : ""}`}>
                            <button className="close-btn" onClick={toggleNav}>×</button>
                            <ul>
                                <li><a href="#about" onClick={toggleNav}>About</a></li>
                                <li><a href="#skills" onClick={toggleNav}>Skills</a></li>
                                <li><a href="#experience" onClick={toggleNav}>Experience</a></li>
                                <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
                            </ul>
                        </aside>
                        <div className="hamburger" onClick={toggleNav}>
                            <span className={`bar ${navOpen ? "open" : ""}`}></span>
                            <span className={`bar ${navOpen ? "open" : ""}`}></span>
                            <span className={`bar ${navOpen ? "open" : ""}`}></span>
                        </div>
                    </>
                ) : (
                    <nav className="navbar">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
}

export default Navbar;