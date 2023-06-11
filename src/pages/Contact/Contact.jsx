import React from "react";
import styles from "./Contact.module.css";
import photo from "../../img/WhatsApp Image 2023-06-11 at 19.57.28.jpeg"

const Contact = () => {
    return(
        <div className={styles.contact}>
            <h1>Contact Me</h1>
            <div className={styles.description}>
                <img src={photo} alt="Lautaro Rodriguez image" className={styles.photo}/>
                <p>You can contact me at LinkedIn, GitHub or Gmail</p>
            </div>
            <div className={styles.socialMedia}>
                <div className={styles.linked}>
                    <a href="https://www.linkedin.com/in/lautaro-rodriguez-a87ba1231" target="_blank" rel="noopener noreferrer">
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className={styles.github}>
                    <a href="https://github.com/Lauta2712" target="_blank" rel="noopener noreferrer">
                        <p>GitHub</p>
                    </a>
                </div>
                <div className={styles.gmail}>
                    <a href="mailto:lautarorodriguez887@gmail.com">
                        <p>Gmail</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;