import React from "react";
import "./Services.css";
import {
  FaGlobe,
  FaChartBar,
  FaServer,
  FaShoppingCart,
  FaWrench,
  FaCalendarAlt
} from "react-icons/fa";
import { FaRobot, FaBolt, FaMobileAlt, FaCodeBranch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeServices = [
    {
      title: t("serviceTitle1"),
      description: t("serviceDescription1"),
      icon: <FaGlobe className="service-icon" />,
      features: [t("serviceFeature1"), t("serviceFeature2"), t("serviceFeature3")]
    },
    {
      title: t("serviceTitle2"),
      description: t("serviceDescription2"),
      icon: <FaChartBar className="service-icon" />,
      features: [t("serviceFeature4"), t("serviceFeature5"), t("serviceFeature6")]
    },
    {
      title: t("serviceTitle3"),
      description: t("serviceDescription3"),
      icon: <FaServer className="service-icon" />,
      features: [t("serviceFeature7"), t("serviceFeature8"), t("serviceFeature9")]
    },
    {
      title: t("serviceTitle4"),
      description: t("serviceDescription4"),
      icon: <FaShoppingCart className="service-icon" />,
      features: [t("serviceFeature10"), t("serviceFeature11"), t("serviceFeature12")]
    },
    {
      title: t("serviceTitle5"),
      description: t("serviceDescription5"),
      icon: <FaWrench className="service-icon" />,
      features: [t("serviceFeature13"), t("serviceFeature14"), t("serviceFeature15")]
    },
    {
      title: t("serviceTitle6"),
      description: t("serviceDescription6"),
      icon: <FaCalendarAlt className="service-icon" />,
      features: [t("serviceFeature16"), t("serviceFeature17"), t("serviceFeature18")]
    }
  ];

  const comingSoonServices = [
    {
      icon: <FaRobot className="service-icon" />,
      title: t("comingSoonTitle1"),
      description: t("comingSoonDescription1")
    },
    {
      icon: <FaBolt className="service-icon" />,
      title: t("comingSoonTitle2"),
      description: t("comingSoonDescription2")
    },
    {
      icon: <FaMobileAlt className="service-icon" />,
      title: t("comingSoonTitle3"),
      description: t("comingSoonDescription3")
    },
    {
      icon: <FaCodeBranch className="service-icon" />,
      title: t("comingSoonTitle4"),
      description: t("comingSoonDescription4")
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">{t("services")}</h2>
      <div className="services-container">
        {activeServices.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-header">
              <div className="service-details">
                <h3>{service.title}</h3>
              </div>
              {service.icon}
            </div>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              type="button"
              className="service-cta"
              onClick={handleScrollToContact}
            >
              {t("servicesCTA")}
            </button>
          </div>
        ))}
      </div>

      <div className="services-coming-soon">
        <h3 className="services-coming-title">
          {t("servicesComingSoonTitle")}
        </h3>
        <p className="services-coming-subtitle">
          {t("servicesComingSoonSubtitle")}
        </p>
        <div className="services-coming-grid">
          {comingSoonServices.map((service, index) => (
            <div key={index} className="service-item service-item--coming">
              <div className="service-header">
                <div className="service-details">
                  <h3>{service.title}</h3>
                </div>
                {service.icon}
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;