import React from "react";
import "./Footer.css";
import LinkedIn from "../../icons/linkedin.png";
import Gmail from "../../icons/gmail.png";
import GitHub from "../../icons/github (2).png";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <a href="https://www.linkedin.com/in/lautaro-rodriguez-a87ba1231" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Lauta2712" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
            </a>
            <a href="/docs/Lautaro_Rodriguez_CV.pdf" className="pdf" download>
                <button>Descargar CV</button>
            </a>
            {/* <a href="mailto:lautarorodriguez887@gmail.com">
                <img src={Gmail} alt="Gmail" />
            </a> */}
        </footer>
    );
}

export default Footer;