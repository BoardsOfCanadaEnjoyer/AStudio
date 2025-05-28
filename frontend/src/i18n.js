import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        portfolio: "Portfolio", 
        services: "Services",
        contact: "Contact"
      },
      hero: {
        title: "A. STUDIO",
        subtitle: "Modern Architecture",
        mission: "Creating harmonious spaces where geometric precision meets natural beauty. We design contemporary architecture that connects form, function, and environment."
      },
      about: {
        title: "Our Philosophy",
        subtitle: "Architecture in Harmony",
        description: "At A. STUDIO, we believe that modern architecture should seamlessly integrate with its environment. Our approach combines clean geometric forms with extensive use of natural light, creating spaces that feel both contemporary and timeless. Each project is a careful balance between innovation and sustainability, form and function.",
        values: {
          innovation: {
            title: "Innovation",
            desc: "Pushing boundaries with contemporary design solutions"
          },
          sustainability: {
            title: "Sustainability", 
            desc: "Creating environmentally conscious architectural solutions"
          },
          harmony: {
            title: "Harmony",
            desc: "Balancing built environments with natural landscapes"
          }
        }
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive Architectural Solutions",
        items: {
          residential: {
            title: "Residential Design",
            desc: "Custom homes that blend modern living with architectural excellence"
          },
          commercial: {
            title: "Commercial Projects", 
            desc: "Innovative spaces for business and community engagement"
          },
          planning: {
            title: "Urban Planning",
            desc: "Strategic development that enhances urban environments"
          },
          interior: {
            title: "Interior Architecture",
            desc: "Cohesive interior spaces that reflect architectural vision"
          }
        }
      },
      portfolio: {
        title: "Selected Projects",
        subtitle: "A showcase of our architectural vision",
        projects: {
          geometric: "Geometric Harmony House",
          modern: "Urban Contemporary Tower", 
          minimal: "Minimalist Residential Complex",
          nature: "Nature Integration Pavilion",
          abstract: "Abstract Form Building"
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Ready to create something extraordinary?",
        email: "contact@a-studio.si",
        phone: "+386 1 234 5678",
        address: "Ljubljana, Slovenia",
        cta: "Start Your Project"
      }
    }
  },
  si: {
    translation: {
      nav: {
        about: "O nas",
        portfolio: "Portfolio",
        services: "Storitve", 
        contact: "Kontakt"
      },
      hero: {
        title: "A. STUDIO",
        subtitle: "Moderna Arhitektura",
        mission: "Ustvarjamo harmonične prostore, kjer se geometrijska natančnost srečuje z naravno lepoto. Načrtujemo sodobno arhitekturo, ki povezuje obliko, funkcijo in okolje."
      },
      about: {
        title: "Naša Filozofija",
        subtitle: "Arhitektura v Harmoniji",
        description: "V A. STUDIO verjamemo, da se mora moderna arhitektura brezhibno integrirati s svojim okoljem. Naš pristop združuje čiste geometrijske oblike z obsežno uporabo naravne svetlobe ter ustvarja prostore, ki so hkrati sodobni in brezčasni. Vsak projekt je skrbno ravnovesje med inovacijo in trajnostjo, obliko in funkcijo.",
        values: {
          innovation: {
            title: "Inovacije",
            desc: "Prestopanje meja s sodobnimi oblikovalskimi rešitvami"
          },
          sustainability: {
            title: "Trajnost",
            desc: "Ustvarjanje okoljsko ozaveščenih arhitekturnih rešitev"
          },
          harmony: {
            title: "Harmonija", 
            desc: "Uravnoteženje grajenega okolja z naravnimi pokrajinami"
          }
        }
      },
      services: {
        title: "Naše Storitve",
        subtitle: "Celovite Arhitekturne Rešitve",
        items: {
          residential: {
            title: "Stanovanjsko Oblikovanje",
            desc: "Hiše po meri, ki združujejo sodobno bivanje z arhitekturno odličnostjo"
          },
          commercial: {
            title: "Komercialni Projekti",
            desc: "Inovativni prostori za poslovno in skupnostno sodelovanje"
          },
          planning: {
            title: "Urbanistično Načrtovanje",
            desc: "Strateški razvoj, ki izboljšuje urbana okolja"
          },
          interior: {
            title: "Notranja Arhitektura",
            desc: "Povezani notranji prostori, ki odražajo arhitekturno vizijo"
          }
        }
      },
      portfolio: {
        title: "Izbrani Projekti",
        subtitle: "Prikaz naše arhitekturne vizije",
        projects: {
          geometric: "Hiša Geometrijske Harmonije",
          modern: "Urbani Sodobni Stolp",
          minimal: "Minimalistični Stanovanjski Kompleks", 
          nature: "Paviljon Integracije z Naravo",
          abstract: "Stavba Abstraktnih Oblik"
        }
      },
      contact: {
        title: "Stopite v Stik",
        subtitle: "Pripravljeni ustvariti nekaj izjemnega?",
        email: "kontakt@a-studio.si",
        phone: "+386 1 234 5678", 
        address: "Ljubljana, Slovenija",
        cta: "Začnite Svoj Projekt"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;