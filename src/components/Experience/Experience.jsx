import React from "react";
import "./Experience.css";
import { FaCode, FaStore, FaCalendarAlt, FaRocket } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title experience-section-title">{t('experience')}</h2>
      
      <div className="experience-container">

        <div className="experience-item">
          <div className="experience-header">
            <FaRocket className="experience-icon" aria-hidden="true" />
            <div className="experience-details">
              <h3>{t('jobTitlePulso')}</h3>
              <p className="experience-company">{t('companyPulso')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
            <span>{t('datePulso')}</span>
          </div>
          <p className="experience-summary">{t('pulsoDescription')}</p>
          <ul className="experience-description">
            <li>{t('pulsoPoint1')}</li>
            <li>{t('pulsoPoint2')}</li>
            <li>{t('pulsoPoint3')}</li>
            <li>{t('pulsoPoint4')}</li>
            <li>{t('pulsoPoint5')}</li>
          </ul>
          <p className="experience-tech">{t('pulsoTech')}</p>
          <div className="experience-link">
            <a href="https://pulso-studio.vercel.app/" target="_blank" rel="noopener noreferrer">
              https://pulso-studio.vercel.app/
            </a>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" aria-hidden="true" />
            <div className="experience-details">
              <h3>{t('jobTitle1')}</h3>
              <p className="experience-company">{t('company1')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
            <span>{t('date1')}</span>
          </div>

          <ul className="experience-description">
            <li>{t('responsibility1')}</li>
            <li>{t('responsibility2')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
              <FaCode className="experience-icon" aria-hidden="true" />
              <div className="experience-details">
                <h3>{t('jobTitle5')}</h3>
                <p className="experience-company">{t('company5')}</p>
              </div>
            </div>
            <div className="experience-date">
              <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
              <span>{t('date5')}</span>
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
                {/* <a href="https://coneq-sas.vercel.app/" target="_blank" rel="noopener noreferrer">
                  https://coneq-sas.vercel.app/
                </a> */}
              </p>
            </div>
          {/* </a> */}
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" aria-hidden="true" />
            <div className="experience-details">
              <h3>{t('jobTitle2')}</h3>
              <p className="experience-company">{t('company2')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
            <span>{t('date2')}</span>
          </div>
          <ul className="experience-description">
            <li>{t('responsibility3')}</li>
            <li>{t('responsibility4')}</li>
            <li>{t('responsibility5')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaCode className="experience-icon" aria-hidden="true" />
            <div className="experience-details">
              <h3>{t('jobTitle4')}</h3>
              <p className="experience-company">{t('company4')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
            <span>{t('date4')}</span>
          </div>
          <ul className="experience-description">
            <li>{t('responsibility9')}</li>
            <li>{t('responsibility10')}</li>
            <li>{t('responsibility11')}</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <FaStore className="experience-icon" aria-hidden="true" />
            <div className="experience-details">
              <h3>{t('jobTitle3')}</h3>
              <p className="experience-company">{t('company3')}</p>
            </div>
          </div>
          <div className="experience-date">
            <FaCalendarAlt className="calendar-icon" aria-hidden="true" />
            <span>{t('date3')}</span>
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