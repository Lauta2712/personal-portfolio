import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 
import XLogo from "../../assets/X.png"; 

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <a href="https://www.linkedin.com/in/lautaro-rodriguez-a87ba1231" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} style={{ color: '#0077B5' }} />
                </a>
                <a href="https://github.com/Lauta2712" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} style={{ color: '#333' }} /> 
                </a>
                <a href="https://instagram.com/lauta_rodriguez01/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} style={{ color: '#E4405F' }} />
                </a>
                <a href="https://x.com/lautarodriguezm" target="_blank" rel="noopener noreferrer">
                    <img src={XLogo} alt="X Logo" style={{ width: '40px', height: '38px' }} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;