import React from "react";
import "./Footer.css";
import LinkedIn from "../../icons/linkedin.png";
// import Gmail from "../../icons/gmail.png";
import GitHub from "../../icons/github (2).png";
import Instagram from "../../icons/instagram.png";
import { useTranslation } from 'react-i18next';  


const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer" className="footer">
            <a href="https://www.linkedin.com/in/lautaro-rodriguez-a87ba1231" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Lauta2712" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://instagram.com/lauta_rodriguez01/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
            </a>
            {/* <a href="mailto:lautarorodriguez887@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Lautaro,%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo.">
                <img src={Gmail} alt="Gmail" />
            </a> */}
            <a href="/docs/Lautaro_Rodriguez_CV.pdf" className="pdf" download>
                <button>{t('download cv')}</button>
            </a>
        </footer>
    );
}

export default Footer;