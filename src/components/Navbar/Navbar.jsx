import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profileImage from "../../img/Lautaro-Photoroom.png";
import { FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';  

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const { t, i18n } = useTranslation(); 

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

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "es" : "en";
        i18n.changeLanguage(newLang); 
    };

    return (
        <>
            <div className="navbar-container">
                <div className="hero-image">
                    <img src={profileImage} alt="Profile" className="profile-img" />
                    {/* <h1 className="initials"><span className="highlight">LR</span></h1> */}
                </div>
                {isMobile ? (
                    <>
                        <aside className={`sidebar ${navOpen ? "open" : ""}`}>
                            <ul>
                                <li><button className="close-btn" onClick={toggleNav}>×</button></li>
                                <li><a href="#hero"><FaUser size={24} /> </a></li>
                                <li><a href="#experience"><FaBriefcase size={24} /> </a></li>
                                <li><a href="#services"><FaTools size={24} /> </a></li>
                                <li><a href="#contact"><FaEnvelope size={24} /> </a></li>
                            </ul>
                            <div className="language-switch">
                                <label className="switch">
                                    <input type="checkbox" checked={i18n.language === "es"} onChange={toggleLanguage} />
                                    <span className="slider"></span>
                                </label>
                                <span className={`flag-icon ${i18n.language === "en" ? "flag-us" : "flag-ar"}`}></span>
                            </div>
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
                            <div className="language-switch">
                                <label className="switch">
                                    <input type="checkbox" checked={i18n.language === "es"} onChange={toggleLanguage} />
                                    <span className="slider"></span>
                                </label>
                                <span className={`flag-icon ${i18n.language === "en" ? "flag-us" : "flag-ar"}`}></span>
                            </div>
                            <li><a href="#about" onClick={toggleNav}>{t('about')}</a></li>
                            <li><a href="#experience" onClick={toggleNav}>{t('experience')}</a></li>
                            <li><a href="#services" onClick={toggleNav}>{t('skills')}</a></li>
                            <li><a href="#contact" onClick={toggleNav}>{t('contact')}</a></li>
                        </ul>                        
                    </nav>
                )}
            </div>
        </>
    );
}

export default Navbar;