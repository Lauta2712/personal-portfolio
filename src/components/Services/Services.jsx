import React from "react";
import "./Services.css";
import { FaCog, FaLaptopCode, FaUsers } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services-section">
      <h2>{t('services')}</h2>
      <div className="services-container">
        <div className="service-item">
          <div className="service-header">
            <div className="service-details">
              <h3>{t('serviceTitle1')}</h3>
            </div>
            <FaLaptopCode className="service-icon" />
          </div>
          <p>{t('serviceDescription1')}</p>
          <ul>
            <li>{t('serviceFeature1')}</li>
            <li>{t('serviceFeature2')}</li>
          </ul>
        </div>
        <div className="service-item">
          <div className="service-header">
            <div className="service-details">
              <h3>{t('serviceTitle2')}</h3>
            </div>
            <FaUsers className="service-icon" />
          </div>
          <p>{t('serviceDescription2')}</p>
          <ul>
            {/* <li>{t('serviceFeature3')}</li> */}
            <li>{t('serviceFeature4')}</li>
            <li>{t('serviceFeature6')}</li>
          </ul>
        </div>
        <div className="service-item">
          <div className="service-header">
            <div className="service-details">
              <h3>{t('serviceTitle3')}</h3>
            </div>
            <FaCog className="service-icon" />
          </div>
          <p>{t('serviceDescription3')}</p>
          <ul>
            <li>{t('serviceFeature7')}</li>
            <li>{t('serviceFeature8')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;