import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profileImage from "../../img/Lautaro-Photoroom.png";
import { FaUser, FaTools, FaBriefcase, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme(); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
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
                                <li><button className="close-btn" onClick={toggleNav} aria-label="Cerrar menú">×</button></li>
                                <li><a href="#about" onClick={toggleNav}><FaUser size={22} /> {t('about')}</a></li>
                                <li><a href="#projects" onClick={toggleNav}><FaBriefcase size={22} /> {t('projectsNav')}</a></li>
                                <li><a href="#experience" onClick={toggleNav}><FaBriefcase size={22} /> {t('experience')}</a></li>
                                <li><a href="#services" onClick={toggleNav}><FaTools size={22} /> {t('services')}</a></li>
                                <li><a href="#skills" onClick={toggleNav}><FaTools size={22} /> {t('skills')}</a></li>
                                <li><a href="#contact" onClick={toggleNav}><FaEnvelope size={22} /> {t('contact')}</a></li>
                            </ul>
                            <div className="sidebar-controls">
                                <button
                                    type="button"
                                    className="theme-toggle"
                                    onClick={toggleTheme}
                                    aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                                >
                                    {theme === 'dark' ? <FaSun size={22} aria-hidden="true" /> : <FaMoon size={22} aria-hidden="true" />}
                                </button>
                                <div className="language-switch">
                                    <label className="switch">
                                        <input type="checkbox" checked={i18n.language === "es"} onChange={toggleLanguage} />
                                        <span className="slider"></span>
                                    </label>
                                    <span className={`flag-icon ${i18n.language === "en" ? "flag-us" : "flag-ar"}`}></span>
                                </div>
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
                        <ul className="navbar-links">
                            <li><a href="#about" onClick={toggleNav}>{t('about')}</a></li>
                            <li><a href="#projects" onClick={toggleNav}>{t('projectsNav')}</a></li>
                            <li><a href="#experience" onClick={toggleNav}>{t('experience')}</a></li>
                            <li><a href="#services" onClick={toggleNav}>{t('services')}</a></li>
                            <li><a href="#skills" onClick={toggleNav}>{t('skills')}</a></li>
                            <li><a href="#contact" onClick={toggleNav}>{t('contact')}</a></li>
                        </ul>
                        <div className="navbar-controls">
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                                title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                            >
                                {theme === 'dark' ? <FaSun size={20} aria-hidden="true" /> : <FaMoon size={20} aria-hidden="true" />}
                            </button>
                            <div className="language-switch">
                                <label className="switch">
                                    <input type="checkbox" checked={i18n.language === "es"} onChange={toggleLanguage} />
                                    <span className="slider"></span>
                                </label>
                                <span className={`flag-icon ${i18n.language === "en" ? "flag-us" : "flag-ar"}`}></span>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
}

export default Navbar;