import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}>Lautaro Rodriguez</h2>
            <div className={styles.links}>
                <Link to="/contact" className={styles.link}>
                    Contact
                </Link>
                <Link to="/about" className={styles.link}>
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;