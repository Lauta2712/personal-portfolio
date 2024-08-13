import React from 'react';
import styles from "./Navbar.module.css";
import photo from "../../img/Lautaro.jpeg";

const Navbar = () => {
    const handleItemClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.navbar}>
            <img src={photo} alt="Lautaro Rodriguez image" className={styles.photo} />
            <div className={styles.logo}>
                Lautaro Rodriguez
            </div>

            <div className={styles.navItems}>
                <div onClick={() => handleItemClick("skills")}>Skills</div>
                <div onClick={() => handleItemClick("about")}>Acerca de</div>
                <div onClick={() => handleItemClick("experience")}>Experiencia</div>
                <div onClick={() => handleItemClick("contact")}>Contacto</div>
            </div>
        </div>
    );
};

export default Navbar;