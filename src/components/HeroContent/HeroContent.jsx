import React from "react";
import "./HeroContent.css";
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
    const { t } = useTranslation();

    return (
        <main id="hero" className="hero-section">
            <div className="hero-content">
                <h1>{t('greeting')} <span className="highlight">{t('name')}</span></h1>
                <h2>{t('profession')}</h2>
            </div>
        </main>
    );
}

export default HeroContent;