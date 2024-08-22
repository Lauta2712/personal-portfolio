import React from "react";
import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2>{t('about')}</h2>
      <p>
        {t('aboutDescription')}
      </p>
    </section>
  );
}

export default About;