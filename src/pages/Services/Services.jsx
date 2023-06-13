import React from "react";
import styles from "./Services.module.css"

const Services = () => {
    return(
        <div className={styles.services}>
            <div className={styles.servicesItems}>
                <p>Full Stack Development</p>
            </div>
            <div className={styles.servicesItems}>
                <p>Front-End Development</p>
            </div>
            <div className={styles.servicesItems}>
                <p>Back-End Development</p>
            </div>
            <div className={styles.servicesItems}>
                <p>Consultant</p>
            </div>
        </div>
    )
}

export default Services;