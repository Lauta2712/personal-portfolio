import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // HeroContent
          "greeting": "Hello! I am",
          "name": "Lautaro Rodriguez",
          "profession": "Full Stack Developer",
          
          //Navbar
          "skills": "Skills",
          "contact":"Contact",
          
          // About
          "about": "About",
          "aboutDescription": "Full Stack Developer with over 1 year of experience. Knowledgeable in agile methodologies (SCRUM), GIT, HTML, CSS, JavaScript, Bootstrap, React.js, Redux, Node.js, Express, SQL, Sequelize, Entity Framework, C#, .NET, SQL Server, Material UI, KendoUI. Experienced in custom software development, dashboards, plugins, API design, database modifications, which allowed me to develop skills such as adaptability, creativity, critical thinking, among others. English level: C1.",
          
          // Experience
          "experience": "Experience",
          "jobTitle1": "Full Stack Developer",
          "company1": "ANT Automation",
          "date1": "Jul 2023 - Present",
          "responsibility1": "Develop dashboards, plugins, and online applications using JavaScript, React, Redux, Material UI, KendoUI, Highcharts, CSS, C#, .NET, Entity Framework, SQL, SQL Server, Sequelize.",
          "responsibility2": "Design frontend interfaces and elements, maintain and optimize existing websites.",
          "jobTitle2": "Front End Developer",
          "company2": "QXM",
          "date2": "Sep 2023 - Dec 2023",
          "responsibility3": "Development of landing pages, dashboards, plugin creation, improvements, etc.",
          "responsibility4": "Frontend: JavaScript, React, SASS, Bootstrap.",
          "responsibility5": "Backend: NextJS, SQL.",
          "jobTitle3": "Store Manager",
          "company3": "Meat MARKET Store",
          "date3": "Aug 2022 - Nov 2022",
          "responsibility6": "In charge of opening and closing the store.",
          "responsibility7": "Cash handling (opening and closing the register).",
          "responsibility8": "Customer service and personnel control.",
          "jobTitle4": "Full Stack Web Developer",
          "company4": "Byte Me",
          "academicExperience": "Henry Bootcamp",
          "date4": "May 2023 - Jun 2023",
          "responsibility9": "Developed an ecommerce website for technology products.",
          "responsibility10": "Participated in the creation of landing pages, searches, combined filters, sorting, and product creation forms.",
          "responsibility11": "Implemented third-party authentication, email notifications, pagination, admin dashboard for managing products and users, and payment gateway.",
          "frontendTech": "Frontend: HTML, CSS, React, Redux, Auth0, Stripe.",
          "backendTech": "Backend: Express, Node, Nodemailer, Cloudinary, Stripe.",
          "databaseTech": "Database: PostgreSQL, Sequelize.",
          
          // Footer
          "download cv":"Download CV",

          // Services
          "services": "Services",
          "serviceTitle1": "Custom Web Development",
          "serviceDescription1": "Building custom web applications tailored to your needs using modern technologies and best practices.",
          "serviceFeature1": "Modern technologies",
          "serviceFeature2": "Best practices",
          "serviceTitle2": "Responsive Design",
          "serviceDescription2": "Creating responsive and mobile-friendly designs that look great on all devices.",
          "serviceFeature3": "Mobile-friendly",
          "serviceFeature4": "Cross-device compatibility",
          "serviceTitle3": "API Integration",
          "serviceDescription3": "Integrating third-party APIs and creating custom APIs to enhance your application's functionality.",
          "serviceFeature5": "Third-party APIs",
          "serviceFeature6": "Custom API development"
        }
      },
      es: {
        translation: {
          // HeroContent
          "greeting": "Hola! soy",
          "name": "Lautaro Rodriguez",
          "profession": "Desarrollador Full Stack",
          
          // About
          "about": "Acerca de",
          "aboutDescription": "Desarrollador Full Stack con más de 1 año de experiencia. Con conocimientos en metodologías ágiles (SCRUM), GIT, HTML, CSS, JavaScript, Bootstrap, React.js, Redux, Node.js, Express, SQL, Sequelize, Entity Framework, C#, .NET, SQL Server, Material UI, KendoUI. Experiencia en desarrollo de software a medida, dashboards, plugins, diseño de APIs, modificaciones de base de datos, que me permitió desarrollar habilidades como adaptabilidad, creatividad, pensamiento crítico, entre otras. Nivel de inglés: C1.",
          
          //Navbar
          "skills": "Habilidades",
          "contact":"Contacto",
          
          // Experience
          "experience": "Experiencia",
          "jobTitle1": "Desarrollador Full Stack",
          "company1": "ANT Automation",
          "date1": "Jul 2023 - Actualidad",
          "responsibility1": "Desarrollar dashboards, plugins y aplicaciones online utilizando JavaScript, React, Redux, Material UI, KendoUI, Highcharts, CSS, C#, .NET, Entity Framework, SQL, SQL Server, Sequelize.",
          "responsibility2": "Diseñar interfaces y elementos frontend, mantener y optimizar sitios web existentes.",
          "jobTitle2": "Desarrollador Front End",
          "company2": "QXM",
          "date2": "Sep 2023 - Dic 2023",
          "responsibility3": "Desarrollo de landing pages, dashboards, creación de plugins, mejoras, etc.",
          "responsibility4": "Frontend: JavaScript, React, SASS, Bootstrap.",
          "responsibility5": "Backend: NextJS, SQL.",
          "jobTitle3": "Encargado de Local",
          "company3": "Almacen Meat MARKET",
          "date3": "Ago 2022 - Nov 2022",
          "responsibility6": "Encargado de la apertura y cierre del local.",
          "responsibility7": "Encargado de la caja (apertura y cierre de caja).",
          "responsibility8": "Atención al cliente y control de personal.",
          "jobTitle4": "Desarrollador Web Full Stack",
          "company4": "Byte Me",
          "academicExperience": "Henry Bootcamp",
          "date4": "May 2023 - Jun 2023",
          "responsibility9": "Desarrollo de un sitio web de ecommerce para productos tecnológicos.",
          "responsibility10": "Participación en la creación de landing pages, búsquedas, filtrados combinados, ordenamientos, y formularios para crear productos.",
          "responsibility11": "Implementación de autenticación de terceros, notificaciones por correo, paginado, dashboard de administrador para la gestión de productos y usuarios, y pasarela de pagos.",
          "frontendTech": "Frontend: HTML, CSS, React, Redux, Auth0, Stripe.",
          "backendTech": "Backend: Express, Node, Nodemailer, Cloudinary, Stripe.",
          "databaseTech": "Base de datos: PostgreSQL, Sequelize.",
          
          //Footer
          "download cv":"Descargar CV",

          // Services
          "services": "Servicios",
          "serviceTitle1": "Desarrollo Web Personalizado",
          "serviceDescription1": "Desarrollo de aplicaciones web personalizadas adaptadas a tus necesidades utilizando tecnologías modernas y mejores prácticas.",
          "serviceFeature1": "Tecnologías modernas",
          "serviceFeature2": "Mejores prácticas",
          "serviceTitle2": "Diseño Responsivo",
          "serviceDescription2": "Creación de diseños responsivos y amigables con dispositivos móviles que se ven bien en todos los dispositivos.",
          "serviceFeature3": "Amigable con móviles",
          "serviceFeature4": "Compatibilidad en dispositivos",
          "serviceTitle3": "Integración de APIs",
          "serviceDescription3": "Integración de APIs de terceros y creación de APIs personalizadas para mejorar la funcionalidad de tu aplicación.",
          "serviceFeature5": "APIs de terceros",
          "serviceFeature6": "Desarrollo de APIs personalizadas"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;