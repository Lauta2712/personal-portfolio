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
          "aboutDescriptionPart1": "I am a Full Stack Developer with over 1 year of experience in various technologies and methodologies. I have a strong background in agile methodologies, version control with GIT, and a diverse set of web development technologies including HTML, CSS, JavaScript, React, Redux, Node.js, and more.",
          "aboutDescriptionPart2": "My experience includes developing custom software solutions, designing and implementing user interfaces, and optimizing web applications. I am passionate about creating efficient, scalable, and user-friendly applications that meet the needs of clients and users alike.",
          "aboutDescriptionPart3": "I continuously strive to expand my knowledge and skills by staying up-to-date with the latest industry trends and best practices. I believe in the power of technology to solve complex problems and enhance user experiences.",
          "aboutHobbies": "Outside of work, I enjoy trail running, playing guitar, and exploring new music. These hobbies help me stay balanced and inspired, fueling my creativity and problem-solving skills.",
          
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
          "serviceTitle1": "Web Development & Design",
          "serviceDescription1": "Offering a comprehensive web development service that includes custom web applications, responsive design, and API integrations tailored to your needs.",
          "serviceFeature1": "Custom web applications",
          "serviceFeature2": "Responsive design",
          "serviceFeature3": "API integration",
                    
          "serviceTitle2": "Social Media Management",
          "serviceDescription2": "Managing your social media presence to enhance engagement, grow your audience, and create impactful campaigns.",
          "serviceFeature4": "Content creation",
          "serviceFeature5": "Audience engagement",
          "serviceFeature6": "Campaign management",
                    
          "serviceTitle3": "Software Development",
          "serviceDescription3": "Providing creative and professional software development services.",
          "serviceFeature7": "Software design",
          "serviceFeature8": "Innovative solutions",
          "serviceFeature9": "Marketing materials"
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
          "aboutDescriptionPart1": "Soy un Desarrollador Full Stack con más de 1 año de experiencia en diversas tecnologías y metodologías. Tengo una sólida formación en metodologías ágiles, control de versiones con GIT y un conjunto diverso de tecnologías de desarrollo web, incluyendo HTML, CSS, JavaScript, React, Redux, Node.js y más.",
          "aboutDescriptionPart2": "Mi experiencia incluye el desarrollo de soluciones de software personalizadas, el diseño e implementación de interfaces de usuario y la optimización de aplicaciones web. Me apasiona crear aplicaciones eficientes, escalables y amigables con el usuario que satisfagan las necesidades de clientes y usuarios por igual.",
          "aboutDescriptionPart3": "Continuamente me esfuerzo por expandir mis conocimientos y habilidades manteniéndome al tanto de las últimas tendencias de la industria y mejores prácticas. Creo en el poder de la tecnología para resolver problemas complejos y mejorar las experiencias de los usuarios.",
          "aboutHobbies": "Fuera del trabajo, disfruto del trail running, tocar la guitarra y explorar nueva música. Estos pasatiempos me ayudan a mantenerme equilibrado e inspirado, alimentando mi creatividad y habilidades para resolver problemas.",
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

          // Servicios
          "services": "Servicios",
          "serviceTitle1": "Desarrollo y Diseño Web",
          "serviceDescription1": "Ofrecemos un servicio integral de desarrollo web que incluye aplicaciones web personalizadas, diseño responsivo e integración de APIs adaptadas a tus necesidades.",
          "serviceFeature1": "Aplicaciones web personalizadas",
          "serviceFeature2": "Diseño responsivo",
          "serviceFeature3": "Integración de APIs",
          
          "serviceTitle2": "Gestión de Redes Sociales",
          "serviceDescription2": "Gestionamos tu presencia en redes sociales para aumentar la interacción, hacer crecer tu audiencia y crear campañas impactantes.",
          "serviceFeature4": "Creación de contenido",
          "serviceFeature5": "Interacción con la audiencia",
          "serviceFeature6": "Gestión de campañas",
          
          "serviceTitle3": "Diseño Gráfico",
          "serviceDescription3": "Ofrecemos servicios creativos y profesionales de diseño gráfico, incluyendo logos, branding y materiales de marketing.",
          "serviceFeature7": "Diseño de logos",
          "serviceFeature8": "Identidad de marca",
          "serviceFeature9": "Materiales de marketing"
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