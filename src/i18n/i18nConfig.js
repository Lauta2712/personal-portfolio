import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "key": "Welcome to React"
        }
      },
      es: {
        translation: {
          "key": "Bienvenido a React"
        }
      }
    },
    lng: "en", // idioma predeterminado
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;