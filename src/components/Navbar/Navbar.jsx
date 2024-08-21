import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profileImage from "../../img/Lautaro.jpeg";
import { FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";


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
                            <ul>
                                <li><button className="close-btn" onClick={toggleNav}>×</button></li>
                                <li><a href="#hero"><FaUser size={24} /> </a></li>
                                <li><a href="#experience"><FaBriefcase size={24} /> </a></li>
                                <li><a href="#skills"><FaTools size={24} /> </a></li>
                                <li><a href="#footer"><FaEnvelope size={24} /> </a></li>
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
                            <li><a href="#about" onClick={toggleNav}>About</a></li>
                            <li><a href="#experience" onClick={toggleNav}>Experience</a></li>
                            <li><a href="#skills" onClick={toggleNav}>Skills</a></li>
                            <li><a href="#footer" onClick={toggleNav}>Contact</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
}

export default Navbar;