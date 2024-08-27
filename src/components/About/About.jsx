import React from "react";
import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2>{t('about')}</h2>
      <div className="about-content">
        <p>{t('aboutDescriptionPart1')}</p>
        
        <p>{t('aboutDescriptionPart2')}</p>

        <p>{t('aboutDescriptionPart3')}</p>
        
        <p>{t('aboutHobbies')}</p>
        {/* <div className="scroll-icon">
          <svg width="30" height="30" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
        </div> */}
      </div>
    </section>
  );
}

export default About;