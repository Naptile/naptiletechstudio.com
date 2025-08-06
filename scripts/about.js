AOS.init({ duration: 1000, once: true });

    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
    });

    function toggleMenu() {
      document.querySelector(".menu").classList.toggle("active");
    }

    // Simple i18n
    const translations = {
      en: {
        about_title: "About | Naptile Creative Studio",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_contact: "Contact",
        who_we_are: "Who We Are",
        who_desc: "Naptile Creative Studio offers smart tech solutions across Africa.",
        mission_vision: "Our Mission & Vision",
        mission: "Mission",
        mission_text: "Empowering businesses with cutting-edge technology.",
        vision: "Vision",
        vision_text: "To lead Africa in innovative digital transformation.",
        journey: "Our Journey",
        j_2019: "Vision Begins",
        j_2021: "Expansion in services",
        j_2023: "Global outreach",
        j_2025: "Future Innovation",
        our_team: "Meet Our Team",
        ceo: "Founder & Full-Stack Developer",
        designer: "UI/UX Designer",
        cta_title: "Ready to Work With Us?",
        cta_sub: "Turn your ideas into reality with Naptile Studio.",
        contact_us: "Let's Talk"
      },
      fr: {
        about_title: "À propos | Naptile Creative Studio",
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_pricing: "Tarifs",
        nav_contact: "Contact",
        who_we_are: "Qui sommes-nous",
        who_desc: "Naptile propose des solutions technologiques intelligentes en Afrique.",
        mission_vision: "Notre mission et vision",
        mission: "Mission",
        mission_text: "Autonomiser les entreprises avec la technologie.",
        vision: "Vision",
        vision_text: "Devenir leader africain en transformation numérique.",
        journey: "Notre parcours",
        j_2019: "Début de la vision",
        j_2021: "Expansion",
        j_2023: "Portée mondiale",
        j_2025: "Innovation future",
        our_team: "Rencontrez notre équipe",
        ceo: "Fondateur & Développeur Full-Stack",
        designer: "Conceptrice UI/UX",
        cta_title: "Prêt à travailler avec nous ?",
        cta_sub: "Réalisez vos idées avec Naptile Studio.",
        contact_us: "Contactez-nous"
      }
    };

    document.getElementById("lang").addEventListener("change", (e) => {
      const selected = e.target.value;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[selected] && translations[selected][key]) {
          el.innerHTML = translations[selected][key];
          if (el.tagName === "TITLE") {
            document.title = translations[selected][key];
          }
        }
      });
    });
