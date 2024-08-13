import React from "react";
import styles from "./Contact.module.css";
import LinkedIn from "../../icons/linkedin.png";
import Gmail from "../../icons/gmail.png";
import GitHub from "../../icons/github (2).png";


const Contact = () => {
    return(
        <div className={styles.contact}>
            <h1>Contacto</h1>
            <div className={styles.description}>
                <p>Me podés encontrar en LinkedIn, GitHub o Gmail</p>
                <div className={styles.socialMedia}>
                    <div className={styles.linked}>
                        <a href="https://www.linkedin.com/in/lautaro-rodriguez-a87ba1231" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn}/>
                        </a>
                    </div>
                    <div className={styles.github}>
                        <a href="https://github.com/Lauta2712" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub}/>
                        </a>
                    </div>
                    <div className={styles.gmail}>
                        <a href="mailto:lautarorodriguez887@gmail.com">
                        <img src={Gmail}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;