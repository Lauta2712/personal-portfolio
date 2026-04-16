import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // HeroContent
          "greeting": "Hi! I'm",
          "name": "Lautaro Rodriguez",
          "profession": "Full Stack Developer",
          "heroSubtitle": "I build scalable web applications, dashboards, and modern websites that help businesses grow.",
          "heroCTA": "Work With Me",
          
          //Navbar
          "skills": "Skills",
          "contact":"Contact",
          "projectsNav": "Projects",
          
          // About
          "about": "About",
          "aboutDescriptionPart1": "I'm a Full Stack Developer specialized in React and Node.js, with 2+ years of experience building web applications, dashboards, and corporate websites.",
          "aboutDescriptionPart2": "I focus on turning business needs into clear, maintainable digital products, collaborating closely with product teams and stakeholders.",
          "aboutDescriptionPart3": "I care about architecture, performance, and user experience—from frontend design to API and database integration.",
          "aboutHobbies": "Outside of work, I enjoy trail running, playing guitar, and exploring new music. These keep me creative, focused, and energized.",
          "aboutStatExperience": "+2 years of experience",
          "aboutStatTimezone": "UTC-3 · Buenos Aires",
          "aboutStatLanguages": "Spanish (native), English (B2)",
          
          // Experience
          "experience": "Experience",
          "jobTitle1": "Full Stack Developer",
          "company1": "ANT Automation",
          "date1": "Jul 2023 - Mar 2026",
          "responsibility1": "Develop dashboards, plugins, and online applications using JavaScript, React, Redux, Material UI, KendoUI, Highcharts, CSS, C#, .NET, Entity Framework, SQL, SQL Server, Sequelize.",
          "responsibility2": "Design frontend interfaces and elements, maintain and optimize existing websites.",
          "jobTitle2": "Front End Developer",
          "company2": "QXM",
          "date2": "Sep 2023 - Dec 2023",
          "responsibility3": "Development of landing pages, dashboards, plugin creation, improvements, etc.",
          "responsibility4": "Frontend: JavaScript, React, SASS, Bootstrap.",
          "responsibility5": "Backend: NestJS, SQL.",
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
          
          "jobTitle5": "Full Stack Developer",
          "company5": "Coneq",
          "date5": "Dec 2024 - Jan 2025",
          "responsibility12": "Developing and optimizing software solutions for the construction industry.",
          "responsibility13": "Collaborating with cross-functional teams to define project requirements and deadlines.",
          "responsibility14": "Leading the development of new features for our core product.",
          "responsibility15": "Providing technical support and troubleshooting for software issues.",
            
          "projectDescription": "Corporate website developed for an engineering and construction company.",
          
          "mainFeatures": "Main Features:",
          "feature1": "Responsive Design: Adaptable to mobile devices, tablets, and computers.",
          "feature2": "SEO Optimization: Implementation of best practices to improve visibility in search engines.",
          "feature3": "Multilingual System: Support for multiple languages via i18n.",
          "feature4": "Technologies Used: React, CSS, EmailJS, LeafletJS, among others.",
          "feature5": "Modern and Professional Design: Focused on reflecting the company's corporate identity.",
          "feature6": "Corporate Email Development.",

          // Pulso Studio
          "companyPulso": "Pulso Studio",
          "jobTitlePulso": "Co-Founder / Full Stack Developer",
          "datePulso": "2025 - Present",
          "pulsoDescription": "Co-founded Pulso Studio, a creative and technological digital studio focused on helping businesses build professional digital presence.",
          "pulsoPoint1": "Development of modern websites",
          "pulsoPoint2": "Landing pages for services",
          "pulsoPoint3": "Digital tools for businesses",
          "pulsoPoint4": "Performance-optimized frontends using React",
          "pulsoPoint5": "Collaboration between development and digital strategy",
          "pulsoTech": "React, Vite, JavaScript, HTML, CSS",
          "pulsoWebsite": "Website",
          "pulsoComingSoon": "Coming soon",

          // Footer
          "download cv":"Download CV",

          // Services
          "services": "Services",
          // Service 1
          "serviceTitle1": "Corporate Website / Landing Page",
          "serviceDescription1": "Design and development of modern, responsive websites that reflect your brand identity and boost your online presence.",
          "serviceFeature1": "Responsive design for mobile, tablet and desktop",
          "serviceFeature2": "SEO optimization",
          "serviceFeature3": "Form and map integration",
          // Service 2
          "serviceTitle2": "Dashboard / Admin Panel",
          "serviceDescription2": "Custom dashboard development to visualize, analyze and manage your business data with interactive charts.",
          "serviceFeature4": "Advanced data visualization (Highcharts, Recharts)",
          "serviceFeature5": "Database integration (PostgreSQL, SQL Server)",
          "serviceFeature6": "Roles, permissions and authentication",
          // Service 3
          "serviceTitle3": "REST API / Backend",
          "serviceDescription3": "Development of robust and scalable APIs with Node.js, Express or NestJS, ready to integrate with any frontend or mobile app.",
          "serviceFeature7": "Node.js, Express or NestJS",
          "serviceFeature8": "JWT authentication and security",
          "serviceFeature9": "Swagger documentation",
          // Service 4
          "serviceTitle4": "E-commerce",
          "serviceDescription4": "Online store development with shopping cart, payment gateway and MercadoPago integration.",
          "serviceFeature10": "Next.js with SSR for better SEO",
          "serviceFeature11": "MercadoPago integration",
          "serviceFeature12": "Product management admin panel",
          // Service 5
          "serviceTitle5": "Maintenance & Support",
          "serviceDescription5": "Monthly maintenance service to keep your website or application updated, secure and running smoothly.",
          "serviceFeature13": "Continuous updates and improvements",
          "serviceFeature14": "Bug fixes and technical support",
          "serviceFeature15": "Performance monitoring",
          // Service 6
          "serviceTitle6": "Scheduling & Attendance System",
          "serviceDescription6": "Custom web application to manage shifts, schedules and staff attendance, with reports and role-based access control.",
          "serviceFeature16": "Shift and schedule management",
          "serviceFeature17": "Attendance tracking with reports",
          "serviceFeature18": "Role-based access (admin, employee)",
          // Service 7
          "serviceTitle7": "Web Scraping & Automation",
          "serviceDescription7": "I automate web data collection and repetitive tasks using Javascript and Python. Results delivered as Excel files, Google Sheets, or integrated directly into your app.",
          "serviceFeature19": "Price monitoring, listings and public data",
          "serviceFeature20": "Automatic reports in Excel / Google Sheets",
          "serviceFeature21": "Scheduling and task automation",
          // Services CTA and Coming Soon
          "servicesCTA": "Request a quote",
          "servicesComingSoonTitle": "Coming Soon",
          "servicesComingSoonSubtitle": "Services I'm currently developing",
          // Coming Soon services
          "comingSoonTitle1": "AI Integration / Chatbots",
          "comingSoonDescription1": "Integration of AI-powered features and chatbots into web applications using OpenAI API and LangChain.",
          "comingSoonTitle2": "Automations & Scraping",
          "comingSoonDescription2": "Business workflow automations using N8N, Make and Puppeteer to eliminate repetitive tasks and save time.",
          "comingSoonTitle3": "Mobile App (React Native)",
          "comingSoonDescription3": "Cross-platform mobile application development for iOS and Android using React Native.",
          "comingSoonTitle4": "CI/CD & Basic DevOps",
          "comingSoonDescription4": "CI/CD pipeline setup with GitHub Actions, Docker and cloud deployments on Vercel, Railway or AWS.",
          
          // Projects
          "projects": {
            "sectionTitle": "Featured Projects",
            "intro": "Some of the projects I've worked on recently, combining development, design and business focus.",
            "viewProject": "View project",
            "pulso": {
              "title": "Pulso Studio",
              "role": "Co-Founder · Full Stack Developer",
              "description": "Digital studio that helps professionals and businesses translate their value proposition into clear, modern, easy-to-maintain websites.",
              "bullets": [
                "Definition of content structure and key messages with the client.",
                "Design and development of websites and landing pages aimed at getting contacts and bookings.",
                "Integration of forms, email automation and basic analytics to understand user behavior."
              ]
            },
            "coneq": {
              "title": "Coneq",
              "role": "Full Stack Developer",
              "description": "Corporate website for an engineering and construction company, focused on building trust and showcasing their projects clearly.",
              "bullets": [
                "Information architecture for services, projects and contact sections.",
                "Implementation of a responsive design consistent with the company's visual identity.",
                "Performance and on-page SEO adjustments (metadata, semantic structure, best practices)."
              ]
            },
            "crux": {
              "title": "Crux Escalada · Scheduling System",
              "role": "Full Stack Developer",
              "description": "Internal web application for a climbing gym to manage schedules, capacity and attendance in a centralized way.",
              "bullets": [
                "Shift and capacity management by time slot directly from the browser.",
                "Admin panel for user management and attendance tracking.",
                "QR codes to speed up check-in and daily control by staff."
              ]
            },
            "mpscaper": {
              "title": "Mountain Project Scraper",
              "role": "Personal Project · Node.js Developer",
              "description": "Scraper that extracts climbing routes from Argentina listed on mountainproject.com, collecting name, location and French-scale difficulty grade. Results saved as JSON.",
              "bullets": [
                "Browser automation with Playwright to handle JS-rendered content.",
                "Retry logic with exponential backoff and resource blocking to reduce load time.",
                "Selector fallbacks per field to handle layout variations without breaking."
              ]
            }
          },

          //FORM
          "form": {
            "title": "Contact Me",
            "nameLabel": "Name",
            "namePlaceholder": "Your name",
            "emailLabel": "Email Address",
            "emailPlaceholder": "Your email",
            "messageLabel": "Message",
            "messagePlaceholder": "Write your message here",
            "button": "Send",
            "successMessage": "Message sent successfully!",
            "errorMessage": "There was an error sending the message."
          },
        }
      },
      es: {
        translation: {
          // HeroContent
          "greeting": "Hola! soy",
          "name": "Lautaro Rodriguez",
          "profession": "Desarrollador Full Stack",
          "heroSubtitle": "Desarrollo aplicaciones web escalables, dashboards y sitios modernos que ayudan a los negocios a crecer.",
          "heroCTA": "Trabajemos juntos",
          
          // About
          "about": "Acerca de",
          "aboutDescriptionPart1": "Soy Desarrollador Full Stack especializado en React y Node.js, con más de 2 años construyendo aplicaciones web, dashboards y sitios corporativos.",
          "aboutDescriptionPart2": "Me enfoco en traducir necesidades de negocio en productos digitales claros y mantenibles, trabajando de cerca con equipos de producto y stakeholders.",
          "aboutDescriptionPart3": "Me gusta cuidar la arquitectura, la performance y la experiencia de usuario, desde el frontend hasta la integración con APIs y bases de datos.",
          "aboutHobbies": "Fuera del código disfruto del trail running, tocar la guitarra y descubrir nueva música; son cosas que me ayudan a mantener la creatividad y el foco.",
          "aboutStatExperience": "+2 años de experiencia",
          "aboutStatTimezone": "UTC-3 · Buenos Aires",
          "aboutStatLanguages": "Español (nativo), Inglés (B2)",
          //Navbar
          "skills": "Habilidades",
          "contact":"Contacto",
          "projectsNav": "Proyectos",
          
          // Experience
          "experience": "Experiencia",
          "jobTitle1": "Desarrollador Full Stack",
          "company1": "ANT Automation",
          "date1": "Jul 2023 - Mar 2026",
          "responsibility1": "Desarrollar dashboards, plugins y aplicaciones online utilizando JavaScript, React, Redux, Material UI, KendoUI, Highcharts, CSS, C#, .NET, Entity Framework, SQL, SQL Server, Sequelize.",
          "responsibility2": "Diseñar interfaces y elementos frontend, mantener y optimizar sitios web existentes.",
          "jobTitle2": "Desarrollador Front End",
          "company2": "QXM",
          "date2": "Sep 2023 - Dic 2023",
          "responsibility3": "Desarrollo de landing pages, dashboards, creación de plugins, mejoras, etc.",
          "responsibility4": "Frontend: JavaScript, React, SASS, Bootstrap.",
          "responsibility5": "Backend: NestJS, SQL.",
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
          "jobTitle5": "Full Stack Developer",
          "company5": "Coneq",
          "date5": "Dic 2024 - Ene 2025",
          "responsibility12": "Desarrollando y optimizando soluciones de software para la industria de la construcción.",
          "responsibility13": "Colaborando con equipos multifuncionales para definir requisitos y plazos de proyectos.",
          "responsibility14": "Liderando el desarrollo de nuevas funcionalidades para nuestro producto principal.",
          "responsibility15": "Brindando soporte técnico y solucionando problemas de software.",
          
          "projectDescription": "Sitio corporativo desarrollado para una empresa de ingeniería y construcción.",
          
          "mainFeatures": "Características principales:",
          "feature1": "Diseño responsivo: Adaptable a dispositivos móviles, tablets y computadoras.",
          "feature2": "Optimización SEO: Implementación de buenas prácticas para mejorar la visibilidad en motores de búsqueda.",
          "feature3": "Sistema multilenguaje: Soporte para varios idiomas mediante i18n.",
          "feature4": "Tecnologías utilizadas: React, CSS, EmailJS, LeafletJS, entre otras.",
          "feature5": "Diseño moderno y profesional: Enfocado en reflejar la identidad corporativa de la empresa.",
          "feature6": "Desarrollo de correo corporativo.",

          // Pulso Studio
          "companyPulso": "Pulso Studio",
          "jobTitlePulso": "Co-Fundador / Desarrollador Full Stack",
          "datePulso": "2025 - Presente",
          "pulsoDescription": "Co-fundé Pulso Studio, un estudio digital creativo y tecnológico enfocado en ayudar a empresas a construir presencia digital profesional.",
          "pulsoPoint1": "Desarrollo de sitios web modernos",
          "pulsoPoint2": "Landing pages para servicios",
          "pulsoPoint3": "Herramientas digitales para negocios",
          "pulsoPoint4": "Frontends optimizados en rendimiento con React",
          "pulsoPoint5": "Colaboración entre desarrollo y estrategia digital",
          "pulsoTech": "React, Vite, JavaScript, HTML, CSS",
          "pulsoWebsite": "Sitio web",
          "pulsoComingSoon": "Próximamente",
          
          //Footer
          "download cv":"Descargar CV",

          // Servicios
          "services": "Servicios",
          // Servicio 1
          "serviceTitle1": "Sitio Corporativo / Landing Page",
          "serviceDescription1": "Diseño y desarrollo de sitios web modernos y responsivos que reflejan la identidad de tu marca y potencian tu presencia online.",
          "serviceFeature1": "Diseño responsivo para mobile, tablet y desktop",
          "serviceFeature2": "Optimización SEO",
          "serviceFeature3": "Integración de formularios y mapas",
          // Servicio 2
          "serviceTitle2": "Dashboard / Panel de Administración",
          "serviceDescription2": "Desarrollo de dashboards personalizados para visualizar, analizar y gestionar datos de tu negocio con gráficos interactivos.",
          "serviceFeature4": "Visualización avanzada de datos (Highcharts, Recharts)",
          "serviceFeature5": "Integración con bases de datos (PostgreSQL, SQL Server)",
          "serviceFeature6": "Roles, permisos y autenticación",
          // Servicio 3
          "serviceTitle3": "API REST / Backend",
          "serviceDescription3": "Desarrollo de APIs robustas y escalables con Node.js, Express o NestJS, listas para integrarse con cualquier frontend o app móvil.",
          "serviceFeature7": "Node.js, Express o NestJS",
          "serviceFeature8": "Autenticación JWT y seguridad",
          "serviceFeature9": "Documentación con Swagger",
          // Servicio 4
          "serviceTitle4": "E-commerce",
          "serviceDescription4": "Desarrollo de tiendas online con carrito de compras, pasarela de pagos e integración con MercadoPago.",
          "serviceFeature10": "Next.js con SSR para mejor SEO",
          "serviceFeature11": "Integración con MercadoPago",
          "serviceFeature12": "Panel de administración de productos",
          // Servicio 5
          "serviceTitle5": "Mantenimiento y Soporte",
          "serviceDescription5": "Servicio mensual de mantenimiento para mantener tu sitio o aplicación actualizada, segura y funcionando sin problemas.",
          "serviceFeature13": "Actualizaciones y mejoras continuas",
          "serviceFeature14": "Corrección de bugs y soporte técnico",
          "serviceFeature15": "Monitoreo de performance",
          // Servicio 6
          "serviceTitle6": "Sistema de Horarios y Asistencias",
          "serviceDescription6": "Aplicación web a medida para gestionar turnos, horarios y asistencia del personal, con reportes y control de acceso por roles.",
          "serviceFeature16": "Gestión de turnos y horarios",
          "serviceFeature17": "Control de asistencia con reportes",
          "serviceFeature18": "Acceso por roles (admin, empleado)",
          // Servicio 7
          "serviceTitle7": "Web Scraping & Automatización",
          "serviceDescription7": "Automatizo la recolección de datos de la web y tareas repetitivas usando Javascript y Python. Entrego los resultados en Excel, Google Sheets o integrado directamente a tu app.",
          "serviceFeature19": "Monitoreo de precios, publicaciones y datos públicos",
          "serviceFeature20": "Reportes automáticos en Excel / Google Sheets",
          "serviceFeature21": "Programación de tareas y automatización de flujos",
          // CTA y Coming Soon
          "servicesCTA": "Consultar precio",
          "servicesComingSoonTitle": "Próximamente",
          "servicesComingSoonSubtitle": "Servicios que estoy desarrollando",
          // Coming Soon
          "comingSoonTitle1": "Integración de IA / Chatbots",
          "comingSoonDescription1": "Integración de funcionalidades con inteligencia artificial y chatbots en aplicaciones web usando OpenAI API y LangChain.",
          "comingSoonTitle2": "Automatizaciones y Scraping",
          "comingSoonDescription2": "Automatizaciones de procesos de negocio con N8N, Make y Puppeteer para eliminar tareas repetitivas y ahorrar tiempo.",
          "comingSoonTitle3": "App Móvil (React Native)",
          "comingSoonDescription3": "Desarrollo de aplicaciones móviles multiplataforma para iOS y Android con React Native.",
          "comingSoonTitle4": "CI/CD y DevOps básico",
          "comingSoonDescription4": "Configuración de pipelines CI/CD con GitHub Actions, Docker y despliegues en Vercel, Railway o AWS.",

          // Projects
          "projects": {
            "sectionTitle": "Proyectos destacados",
            "intro": "Algunos de los proyectos en los que trabajé recientemente, combinando desarrollo, diseño y foco en el negocio.",
            "viewProject": "Ver proyecto",
            "pulso": {
              "title": "Pulso Studio",
              "role": "Co-Founder · Full Stack Developer",
              "description": "Estudio digital que ayuda a profesionales y negocios a traducir su propuesta de valor en sitios web claros, modernos y fáciles de mantener.",
              "bullets": [
                "Definición de la estructura de contenido y mensajes clave junto al cliente.",
                "Diseño y desarrollo de sitios web y landing pages orientadas a conseguir contactos y reservas.",
                "Integración de formularios, automatizaciones de correo y analítica básica para entender el comportamiento de los usuarios."
              ]
            },
            "coneq": {
              "title": "Coneq",
              "role": "Full Stack Developer",
              "description": "Sitio corporativo para una empresa de ingeniería y construcción, enfocado en transmitir confianza y mostrar sus proyectos de forma clara.",
              "bullets": [
                "Arquitectura de información para secciones de servicios, proyectos y contacto.",
                "Implementación de un diseño responsive consistente con la identidad visual de la empresa.",
                "Ajustes de rendimiento y SEO on-page (metadatos, estructura semántica, buenas prácticas)."
              ]
            },
            "crux": {
              "title": "Crux Escalada · Sistema de horarios",
              "role": "Full Stack Developer",
              "description": "Aplicación web interna para que un gimnasio de escalada pueda gestionar sus horarios, cupos y asistencias de forma centralizada.",
              "bullets": [
                "Gestión de turnos y cupos por franja horaria directamente desde el navegador.",
                "Panel para administración de usuarios y registro de asistencias.",
                "Uso de códigos QR para agilizar el ingreso y control diario por parte del staff."
              ]
            },
            "mpscaper": {
              "title": "Mountain Project Scraper",
              "role": "Proyecto personal · Node.js Developer",
              "description": "Scraper que extrae rutas de escalada de Argentina desde mountainproject.com, recolectando nombre, ubicación y grado de dificultad en escala francesa. Resultados guardados en JSON.",
              "bullets": [
                "Automatización de browser con Playwright para manejar contenido renderizado con JS.",
                "Reintentos con backoff exponencial y bloqueo de recursos para reducir los tiempos de carga.",
                "Selectores con fallbacks por campo para tolerar variaciones en el layout sin romperse."
              ]
            }
          },

          //FORM
          "form": {
            "title": "Contactame",
            "nameLabel": "Nombre",
            "namePlaceholder": "Tu nombre",
            "emailLabel": "Correo Electrónico",
            "emailPlaceholder": "Tu correo electrónico",
            "messageLabel": "Mensaje",
            "messagePlaceholder": "Escribe tu mensaje aquí",
            "button": "Enviar",
            "successMessage": "¡Mensaje enviado exitosamente!",
            "errorMessage": "Hubo un error al enviar el mensaje."
          }
        }
      }
    },
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;