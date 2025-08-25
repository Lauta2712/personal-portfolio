import React from "react";
import "./HeroContent.css";
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
    const { t } = useTranslation();

    return (
        <main id="hero" className="hero-section">
            <div className="hero-content">
                <h1>{t('greeting')} <span className="highlight">{t('name')}</span></h1>
                <h2 className="hero-subtitle">{t('heroSubtitle')}</h2>
                {/* <p>{t('profession')}</p> */}
                
                <div className="hero-buttons">
                    <a href="/docs/Lautaro_Rodriguez_CV.pdf" className="pdf" download>
                        <button>{t('download cv')}</button>
                    </a>
                </div>

                <div className="scroll-icon">
                <svg width="30" height="30" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <polyline points="19 12 12 19 5 12"/>
                </svg>
                </div>
            </div>
        </main>
    );
}

export default HeroContent;