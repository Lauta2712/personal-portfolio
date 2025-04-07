import React from "react";
import "./Experience.css";
import { FaCode, FaStore, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section">
      <h2>{t('experience')}</h2>
      
      <div className="experience-container">

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" />
            <div className="experience-details">
              <h3>{t('jobTitle1')}</h3>
              <p>{t('company1')}</p>
            </div>
          </div>

          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" />
            <p>{t('date1')}</p>
          </div>

          <ul className="experience-description">
            <li>{t('responsibility1')}</li>
            <li>{t('responsibility2')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
              <FaCode className="experience-icon" />
              <div className="experience-details">
                <h3>{t('jobTitle5')}</h3>
                <p>{t('company5')}</p>
              </div>
            </div>

            <div className="experience-date">
              <FaCalendarAlt className="calendar-icon" />
              <p>{t('date5')}</p>
            </div>

            {/* <div className="project-features"> */}
              {/* <p>{t('projectDescription')}</p> */}
              <ul className="experience-description">
                <li>{t('feature1')}</li>
                <li>{t('feature2')}</li>
                <li>{t('feature3')}</li>
                <li>{t('feature4')}</li>
                <li>{t('feature5')}</li>
                <li>{t('feature6')}</li>
              </ul>
            {/* </div> */}
            <div className="experience-link">
              <p>
                <a href="https://www.coneq.com.ar/" target="_blank" rel="noopener noreferrer">
                  https://www.coneq.com.ar/
                </a>
              </p>
            </div>
          {/* </a> */}
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" />
            <div className="experience-details">
              <h3>{t('jobTitle2')}</h3>
              <p>{t('company2')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" />
            <p>{t('date2')}</p>
          </div>
          <ul className="experience-description">
            <li>{t('responsibility3')}</li>
            <li>{t('responsibility4')}</li>
            <li>{t('responsibility5')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" />
            <div className="experience-details">
              <h3>{t('jobTitle4')}</h3>
              <p>{t('company4')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" />
            <p>{t('date4')}</p>
          </div>
          <ul className="experience-description">
            <li>{t('responsibility9')}</li>
            <li>{t('responsibility10')}</li>
            <li>{t('responsibility11')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaStore className="experience-icon" />
            <div className="experience-details">
              <h3>{t('jobTitle3')}</h3>
              <p>{t('company3')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" />
            <p>{t('date3')}</p>
          </div>
          <ul className="experience-description">
            <li>{t('responsibility6')}</li>
            <li>{t('responsibility7')}</li>
            <li>{t('responsibility8')}</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;