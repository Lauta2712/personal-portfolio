import React from "react";
import styles from "./Services.module.css"
//import fullstack from "../../img/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"

const Services = () => {
    return(
        <div className={styles.services}>
            <div>
                <p>Full Stack Development</p>
                
            </div>
            <div>
                <p>Front-End Development</p>
            </div>
            <div>
                <p>Back-End Development</p>
            </div>
            <div>
                <p>Consultant</p>
            </div>
        </div>
    )
}

export default Services;