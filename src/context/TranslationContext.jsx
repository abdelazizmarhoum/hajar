import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

// Translation data
const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      fleet: 'Flotte',
      contact: 'Contact',
      contactUs: 'Contactez-nous'
    },
    hero: {
      badge: 'Transport Touristique & Location de Luxe',
      heading: 'Voyagez avec Élégance et Confort',
      subtitle: 'Votre partenaire privilégié pour la location de véhicules de luxe avec chauffeur, transferts aéroports et excursions touristiques sur mesure.',
      ctaBooking: 'Réserver un Chauffeur',
      ctaServices: 'Nos Services',
      statStatus: 'En service',
      statVehicles: 'Véhicules'
    },
    features: {
      heading: 'Pourquoi Choisir BM Transport ?',
      description: 'Notre engagement envers l\'excellence nous distingue. Nous combinons technologie de pointe, expertise humaine et une flotte diversifiée pour vous offrir le meilleur service possible.',
      items: {
        luxury: { title: "Véhicules Haut de Gamme", desc: "Une flotte récente de Mercedes, Vans et 4x4 de luxe." },
        drivers: { title: "Chauffeurs Multilingues", desc: "Personnel professionnel parlant plusieurs langues pour vous accompagner." },
        welcome: { title: "Accueil Personnalisé", desc: "Pancarte nominative et assistance bagages dès votre arrivée." },
        security: { title: "Sécurité Maximale", desc: "Véhicules entretenus et conduite sûre pour votre tranquillité." }
      },
      stat: 'Taux de satisfaction de nos clients'
    },
    about: {
      subtitle: 'À propos de BM Transport',
      heading: 'L\'excellence du Transport Touristique au Maroc',
      description: 'Spécialiste du transport touristique et de la location de véhicules de luxe avec chauffeur, BM TRANSPORTS vous accompagne partout au Maroc. Que ce soit pour un transfert aéroport, une excursion touristique ou un événement VIP, nous garantissons un service premium.',
      points: [
        "Véhicules de luxe (Mercedes, Vans, 4x4)",
        "Chauffeurs professionnels multilingues",
        "Accueil personnalisé (Pancarte, Bagages)",
        "Disponibilité 24/7 pour vos déplacements"
      ],
      stats: {
        vip: 'Service Premium',
        satisfaction: 'Satisfaction',
        assistance: 'Assistance'
      }
    },
    services: {
      subtitle: 'Nos Services',
      heading: 'Solutions de Transport Complètes',
      description: 'Nous offrons une gamme variée de services pour répondre à tous vos besoins en transport et logistique.',
      items: {
        rental: { title: 'Location avec Chauffeur', desc: 'Véhicules de luxe (Mercedes, Vans) pour particuliers ou entreprises. Chauffeurs professionnels à votre disposition.' },
        transfer: { title: 'Transferts Aéroport & Gare', desc: 'Accueil personnalisé avec pancarte, assistance bagages et ponctualité garantie pour vos arrivées et départs.' },
        excursion: { title: 'Excursions Touristiques', desc: 'Circuits personnalisés pour découvrir le Maroc (Marrakech, Villes Impériales) avec des chauffeurs experts.' },
        events: { title: 'Événements Spéciaux', desc: 'Service haut de gamme pour mariages, séminaires et conférences. Transport VIP pour vos invités de marque.' },
        disposal: { title: 'Mise à Disposition', desc: 'Location de véhicule avec chauffeur à la journée ou demi-journée pour une flexibilité totale.' },
        corporate: { title: 'Transport Corporatif', desc: 'Solutions de transport pour entreprises, délégations et transport de personnel avec facturation simplifiée.' }
      },
      learnMore: 'En savoir plus'
    },
    fleet: {
      heading: 'Notre Flotte',
      mainTitle: 'La <span class="text-secondary">Flotte</span> d\'Excellence',
      description: 'Découvrez nos véhicules modernes et diversifiés, adaptés à tous types de missions.',
      filters: { all: 'Tous', luxury: 'Luxe', tourism: 'Touristique', adventure: 'Aventure' },
      details: 'Détails',
      capacityLabel: 'Capacité',
      luggageLabel: 'Bagages',
      featuresLabel: 'Caractéristiques',
      placesUnit: 'Places',
      luggageUnit: 'Sacs',
      items: {
        berline: { name: 'Berline de Luxe', desc: 'Mercedes Classe E ou équivalent. Idéal pour transferts VIP et transport d\'affaires.' },
        van: { name: 'Van Premium', desc: 'Mercedes V-Class. Confort absolu pour les petits groupes et familles.' },
        minibus: { name: 'Minibus Touristique', desc: 'Sprinter VIP aménagé pour le confort sur longues distances et excursions.' },
        suv: { name: '4x4 Tout-Terrain', desc: 'Toyota Land Cruiser / Prado. Pour les circuits dans le désert et l\'Atlas.' }
      },
      vehicleFeatures: {
        wifi: 'WiFi',
        leather: 'Cuir',
        ac: 'AC',
        vip: 'VIP',
        space: 'Grand Espace',
        modularity: 'Modularité',
        family: 'Famille',
        group: 'Transport Groupe',
        comfort: 'Confort Extra',
        fridge: 'Mini Fridge',
        tv: 'TV',
        premium4x4: '4x4 Premium',
        offroad: 'Tout Terrain',
        atlas: 'Atlas/Désert'
      }
    },
    testimonials: {
      heading: 'Ce que disent nos clients',
      subheading: 'La satisfaction de nos clients est notre meilleure carte de visite.',
      items: [
        { name: 'Jean Dupont', role: 'Voyageur d\'Affaires', text: 'Service impeccable. Le chauffeur était ponctuel et la voiture très confortable. Je recommande pour tout déplacement professionnel.' },
        { name: 'Sarah Miller', role: 'Touriste', text: 'Une expérience inoubliable au Maroc grâce à BM Transport. Notre chauffeur était un excellent guide.' },
        { name: 'Marc Lavoine', role: 'Organisateur Événementiel', text: 'Gestion parfaite des transferts pour notre séminaire. Flexibilité et professionnalisme au rendez-vous.' }
      ]
    },
    contact: {
      subtitle: 'Contactez-nous',
      heading: 'Prêt à démarrer votre projet ?',
      description: 'Contactez-nous dès aujourd\'hui pour un devis gratuit ou pour toute demande d\'information. Notre équipe est à votre écoute.',
      info: { phone: 'Téléphone', email: 'Email', address: 'Siège Social', hours: 'Lundi - Samedi, 9h à 18h', response: 'Réponse sous 24h' },
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom complet',
        namePH: 'Votre nom',
        email: 'Email',
        emailPH: 'votre@email.com',
        subject: 'Sujet',
        subjects: ['Demande de devis', 'Transport touristique', 'Mise à disposition', 'Autre'],
        message: 'Message',
        messagePH: 'Comment pouvons-nous vous aider ?',
        send: 'Envoyer le message',
        privacy: 'En envoyant ce formulaire, vous acceptez notre politique de confidentialité.'
      }
    },
    footer: {
      description: 'Votre partenaire de confiance pour tous vos besoins de transport touristique et location de luxe. Excellence et sécurité à chaque kilomètre.',
      quickLinks: 'Liens Rapides',
      contact: 'Contactez-nous',
      newsletter: { title: 'Newsletter', text: 'Abonnez-vous pour recevoir nos actualités.', placeholder: 'Votre email', button: 'S\'abonner' },
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      legal: 'Mentions Légales'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      fleet: 'Fleet',
      contact: 'Contact',
      contactUs: 'Contact Us'
    },
    hero: {
      badge: 'Tourist Transport & Luxury Rental',
      heading: 'Travel with Elegance and Comfort',
      subtitle: 'Your privileged partner for luxury car rental with driver, airport transfers and tailored tourist excursions.',
      ctaBooking: 'Book a Driver',
      ctaServices: 'Our Services',
      statStatus: 'In Service',
      statVehicles: 'Vehicles'
    },
    features: {
      heading: 'Why Choose BM Transport?',
      description: 'Our commitment to excellence sets us apart. We combine cutting-edge technology, human expertise and a diverse fleet to offer you the best possible service.',
      items: {
        luxury: { title: "High-End Vehicles", desc: "A recent fleet of Mercedes, Vans and luxury 4x4s." },
        drivers: { title: "Multilingual Drivers", desc: "Professional staff speaking multiple languages to accompany you." },
        welcome: { title: "Personalized Welcome", desc: "Name sign and luggage assistance upon your arrival." },
        security: { title: "Maximum Security", desc: "Maintained vehicles and safe driving for your peace of mind." }
      },
      stat: 'Client Satisfaction Rate'
    },
    about: {
      subtitle: 'About BM Transport',
      heading: 'Excellence in Tourist Transport in Morocco',
      description: 'Specialist in tourist transport and luxury vehicle rental with driver, BM TRANSPORTS accompanies you throughout Morocco. Whether for an airport transfer, a tourist excursion or a VIP event, we guarantee premium service.',
      points: [
        "Luxury vehicles (Mercedes, Vans, 4x4)",
        "Professional multilingual drivers",
        "Personalized welcome (Sign, Luggage)",
        "24/7 availability for your trips"
      ],
      stats: {
        vip: 'Premium Service',
        satisfaction: 'Satisfaction',
        assistance: 'Assistance'
      }
    },
    services: {
      subtitle: 'Our Services',
      heading: 'Complete Transport Solutions',
      description: 'We offer a wide range of services to meet all your transport and logistics needs.',
      items: {
        rental: { title: 'Rental with Driver', desc: 'Luxury vehicles (Mercedes, Vans) for individuals or companies. Professional drivers at your disposal.' },
        transfer: { title: 'Airport & Station Transfers', desc: 'Personalized welcome with sign, luggage assistance and guaranteed punctuality for your arrivals and departures.' },
        excursion: { title: 'Tourist Excursions', desc: 'Customized tours to discover Morocco (Marrakech, Imperial Cities) with expert drivers.' },
        events: { title: 'Special Events', desc: 'High-end service for weddings, seminars and conferences. VIP transport for your distinguished guests.' },
        disposal: { title: 'At Disposal', desc: 'Vehicle rental with driver for the day or half-day for total flexibility.' },
        corporate: { title: 'Corporate Transport', desc: 'Transport solutions for companies, delegations and staff transport with simplified billing.' }
      },
      learnMore: 'Learn more'
    },
    fleet: {
      heading: 'Our Fleet',
      mainTitle: 'The <span class="text-secondary">Fleet</span> of Excellence',
      description: 'Discover our modern and diverse vehicles, adapted to all types of missions.',
      filters: { all: 'All', luxury: 'Luxury', tourism: 'Tourism', adventure: 'Adventure' },
      details: 'Details',
      capacityLabel: 'Capacity',
      luggageLabel: 'Luggage',
      featuresLabel: 'Features',
      placesUnit: 'Seats',
      luggageUnit: 'Bags',
      items: {
        berline: { name: 'Luxury Sedan', desc: 'Mercedes E-Class or equivalent. Ideal for VIP transfers and business transport.' },
        van: { name: 'Premium Van', desc: 'Mercedes V-Class. Absolute comfort for small groups and families.' },
        minibus: { name: 'Tourist Minibus', desc: 'VIP Sprinter fitted for comfort on long distances and excursions.' },
        suv: { name: '4x4 Off-Road', desc: 'Toyota Land Cruiser / Prado. For desert and Atlas circuits.' }
      },
      vehicleFeatures: {
        wifi: 'WiFi',
        leather: 'Leather Seats',
        ac: 'AC',
        vip: 'VIP Service',
        space: 'Large Space',
        modularity: 'Modularity',
        family: 'Family Friendly',
        group: 'Group Transport',
        comfort: 'Extra Comfort',
        fridge: 'Mini Fridge',
        tv: 'TV',
        premium4x4: 'Premium 4x4',
        offroad: 'Off-Road',
        atlas: 'Atlas/Desert'
      }
    },
    testimonials: {
      heading: 'What our clients say',
      subheading: 'Our clients satisfaction is our best business card.',
      items: [
        { name: 'John Doe', role: 'Business Traveler', text: 'Impeccable service. The driver was punctual and the car very comfortable. I recommend for any professional trip.' },
        { name: 'Sarah Miller', role: 'Tourist', text: 'Unforgettable experience in Morocco thanks to BM Transport. Our driver was an excellent guide.' },
        { name: 'Mark Levin', role: 'Event Planner', text: 'Perfect management of transfers for our seminar. Flexibility and professionalism were there.' }
      ]
    },
    contact: {
      subtitle: 'Contact Us',
      heading: 'Ready to start your project?',
      description: 'Contact us today for a free quote or any information request. Our team is at your disposal.',
      info: { phone: 'Phone', email: 'Email', address: 'Headquarters', hours: 'Monday - Saturday, 9am to 6pm', response: 'Response within 24h' },
      form: {
        title: 'Send us a message',
        name: 'Full Name',
        namePH: 'Your name',
        email: 'Email',
        emailPH: 'your@email.com',
        subject: 'Subject',
        subjects: ['Quote Request', 'Tourist Transport', 'At Disposal', 'Other'],
        message: 'Message',
        messagePH: 'How can we help you?',
        send: 'Send Message',
        privacy: 'By sending this form, you accept our privacy policy.'
      }
    },
    footer: {
      description: 'Your trusted partner for all your tourist transport and luxury rental needs. Excellence and safety at every kilometer.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      newsletter: { title: 'Newsletter', text: 'Subscribe to receive our news.', placeholder: 'Your email', button: 'Subscribe' },
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      legal: 'Legal Notice'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      fleet: 'Flota',
      contact: 'Contacto',
      contactUs: 'Contáctenos'
    },
    hero: {
      badge: 'Transporte Turístico y Alquiler de Lujo',
      heading: 'Viaja con Elegancia y Confort',
      subtitle: 'Su socio privilegiado para el alquiler de vehículos de lujo con conductor, traslados al aeropuerto y excursiones turísticas a medida.',
      ctaBooking: 'Reservar Conductor',
      ctaServices: 'Nuestros Servicios',
      statStatus: 'En Servicio',
      statVehicles: 'Vehículos'
    },
    features: {
      heading: '¿Por qué elegir BM Transport?',
      description: 'Nuestro compromiso con la excelencia nos distingue. Combinamos tecnología de punta, experiencia humana y una flota diversa para ofrecerle el mejor servicio posible.',
      items: {
        luxury: { title: "Vehículos de Alta Gama", desc: "Una flota reciente de Mercedes, Vans y 4x4 de lujo." },
        drivers: { title: "Conductores Multilingües", desc: "Personal profesional que habla varios idiomas para acompañarlo." },
        welcome: { title: "Bienvenida Personalizada", desc: "Letrero con su nombre y asistencia con el equipaje a su llegada." },
        security: { title: "Seguridad Máxima", desc: "Vehículos mantenidos y conducción segura para su tranquilidad." }
      },
      stat: 'Tasa de satisfacción del cliente'
    },
    about: {
      subtitle: 'Sobre BM Transport',
      heading: 'La excelencia en el Transporte Turístico en Marruecos',
      description: 'Especialista en transporte turístico y alquiler de vehículos de lujo con conductor, BM TRANSPORTS le acompaña por todo Marruecos. Ya sea para un traslado al aeropuerto, una excursión turística o un evento VIP, garantizamos un servicio premium.',
      points: [
        "Vehículos de lujo (Mercedes, Vans, 4x4)",
        "Conductores profesionales multilingües",
        "Bienvenida personalizada (Letrero, Equipaje)",
        "Disponibilidad 24/7 para sus viajes"
      ],
      stats: {
        vip: 'Servicio Premium',
        satisfaction: 'Satisfacción',
        assistance: 'Asistencia'
      }
    },
    services: {
      subtitle: 'Nuestros Servicios',
      heading: 'Soluciones de Transporte Completas',
      description: 'Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades de transporte y logística.',
      items: {
        rental: { title: 'Alquiler con Conductor', desc: 'Vehículos de lujo (Mercedes, Vans) para particulares o empresas. Conductores profesionales a su disposición.' },
        transfer: { title: 'Traslados Aeropuerto y Estación', desc: 'Bienvenida personalizada con letrero, asistencia con equipaje y puntualidad garantizada para sus llegadas y salidas.' },
        excursion: { title: 'Excursiones Turísticas', desc: 'Circuitos personalizados para descubrir Marruecos (Marrakech, Ciudades Imperiales) con conductores expertos.' },
        events: { title: 'Eventos Especiales', desc: 'Servicio de alta gama para bodas, seminarios y conferencias. Transporte VIP para sus invitados distinguidos.' },
        disposal: { title: 'A Disposición', desc: 'Alquiler de vehículo con conductor por día o medio día para total flexibilidad.' },
        corporate: { title: 'Transporte Corporativo', desc: 'Soluciones de transporte para empresas, delegaciones y transporte de personal con facturación simplificada.' }
      },
      learnMore: 'Saber más'
    },
    fleet: {
      heading: 'Nuestra Flota',
      mainTitle: 'La <span class="text-secondary">Flota</span> de Excelencia',
      description: 'Descubra nuestros vehículos modernos y diversos, adaptados a todo tipo de misiones.',
      filters: { all: 'Todos', luxury: 'Lujo', tourism: 'Turismo', adventure: 'Aventura' },
      details: 'Detalles',
      capacityLabel: 'Capacidad',
      luggageLabel: 'Equipaje',
      featuresLabel: 'Especificaciones',
      placesUnit: 'Plazas',
      luggageUnit: 'Maletas',
      items: {
        berline: { name: 'Berlina de Lujo', desc: 'Mercedes Clase E o equivalente. Ideal para traslados VIP y transporte de negocios.' },
        van: { name: 'Van Premium', desc: 'Mercedes V-Class. Confort absoluto para pequeños grupos y familias.' },
        minibus: { name: 'Minibús Turístico', desc: 'Sprinter VIP acondicionado para el confort en largas distancias y excursiones.' },
        suv: { name: '4x4 Todo Terreno', desc: 'Toyota Land Cruiser / Prado. Para circuitos en el desierto y el Atlas.' }
      },
      vehicleFeatures: {
        wifi: 'WiFi',
        leather: 'Cuero',
        ac: 'AC',
        vip: 'VIP',
        space: 'Gran Espacio',
        modularity: 'Modularidad',
        family: 'Familiar',
        group: 'Transporte de Grupo',
        comfort: 'Confort Extra',
        fridge: 'Nevera',
        tv: 'TV',
        premium4x4: '4x4 Premium',
        offroad: 'Todo Terreno',
        atlas: 'Atlas/Desierto'
      }
    },
    testimonials: {
      heading: 'Lo que dicen nuestros clientes',
      subheading: 'La satisfacción de nuestros clientes es nuestra mejor tarjeta de visita.',
      items: [
        { name: 'Juan Perez', role: 'Viajero de Negocios', text: 'Servicio impecable. El conductor fue puntual y el coche muy cómodo. Lo recomiendo para cualquier viaje profesional.' },
        { name: 'Sara Garcia', role: 'Turista', text: 'Una experiencia inolvidable en Marruecos gracias a BM Transport. Nuestro conductor fue un excelente guía.' },
        { name: 'Carlos Ruiz', role: 'Organizador de Eventos', text: 'Gestión perfecta de los traslados para nuestro seminario. Flexibilidad y profesionalismo presentes.' }
      ]
    },
    contact: {
      subtitle: 'Contáctenos',
      heading: '¿Listo para comenzar su proyecto?',
      description: 'Contáctenos hoy para un presupuesto gratuito o cualquier solicitud de información. Nuestro equipo está a su disposición.',
      info: { phone: 'Teléfono', email: 'Correo', address: 'Sede Social', hours: 'Lunes - Sábado, 9h a 18h', response: 'Respuesta en 24h' },
      form: {
        title: 'Envíenos un mensaje',
        name: 'Nombre completo',
        namePH: 'Su nombre',
        email: 'Correo',
        emailPH: 'su@correo.com',
        subject: 'Asunto',
        subjects: ['Solicitud de presupuesto', 'Transporte turístico', 'A disposición', 'Otro'],
        message: 'Mensaje',
        messagePH: '¿Cómo podemos ayudarle?',
        send: 'Enviar mensaje',
        privacy: 'Al enviar este formulario, acepta nuestra política de privacidad.'
      }
    },
    footer: {
      description: 'Su socio de confianza para todas sus necesidades de transporte turístico y alquiler de lujo. Excelencia y seguridad en cada kilómetro.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contáctenos',
      newsletter: { title: 'Boletín', text: 'Suscríbase para recibir nuestras noticias.', placeholder: 'Su correo', button: 'Suscribirse' },
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      legal: 'Aviso Legal'
    }
  }
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default to French

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];

    for (let i = 0; i < keys.length; i++) {
      if (translation && translation[keys[i]] !== undefined) {
        translation = translation[keys[i]];
      } else {
        // Fallback to English if translation doesn't exist
        let fallback = translations['en'];
        for (let j = 0; j < keys.length; j++) {
          if (fallback && fallback[keys[j]] !== undefined) {
            fallback = fallback[keys[j]];
          } else {
            return key; // Return the key if no translation is found
          }
        }
        return fallback;
      }
    }

    return translation;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};