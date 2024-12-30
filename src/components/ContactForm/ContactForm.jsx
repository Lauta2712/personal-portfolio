import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './ContactForm.css'; 

const ContactForm = () => {
    const { t } = useTranslation(); 
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(t('form.successMessage')); 
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus(t('form.errorMessage'));
        }
      );
  };

  return (
    <div id="contact" className="contact-form-container">
      <h2>{t('form.title')}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">{t('form.nameLabel')}</label>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder={t('form.namePlaceholder')}
          required
        />

        <label htmlFor="email">{t('form.emailLabel')}</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder={t('form.emailPlaceholder')}
          required
        />

        <label htmlFor="message">{t('form.messageLabel')}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t('form.messagePlaceholder')}
          rows="5"
          required
        />

        <button type="submit">{t('form.button')}</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactForm;
