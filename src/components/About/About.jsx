import React from "react";
import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t('about')}</h2>
      <div className="about-content">
        <p>{t('aboutDescriptionPart1')}</p>
        
        <p>{t('aboutDescriptionPart2')}</p>

        <p>{t('aboutDescriptionPart3')}</p>
        
        <p>{t('aboutHobbies')}</p>
      </div>
      <div className="about-highlights">
        <div className="about-highlight-item">
          <span className="about-highlight-label">{t('aboutStatExperience')}</span>
        </div>
        <div className="about-highlight-item">
          <span className="about-highlight-label">{t('aboutStatTimezone')}</span>
        </div>
        <div className="about-highlight-item">
          <span className="about-highlight-label">{t('aboutStatLanguages')}</span>
        </div>
      </div>
    </section>
  );
}

export default About;