AOS.init({ duration: 1000, once: true });

    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }

    const translations = {
      en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_contact: "Contact",
        contact_heading: "Contact Us",
        contact_subtext: "Let’s bring your ideas to life. We’re here to help!",
        form_title: "Send a Message",
        send_button: "Send Message",
        get_in_touch: "Get in Touch"
      },
      sw: {
        nav_home: "Nyumbani",
        nav_about: "Kuhusu",
        nav_services: "Huduma",
        nav_pricing: "Bei",
        nav_contact: "Wasiliana",
        contact_heading: "Wasiliana Nasi",
        contact_subtext: "Tuletee maoni yako, tuko hapa kusaidia!",
        form_title: "Tuma Ujumbe",
        send_button: "Tuma",
        get_in_touch: "Wasiliana Nasi"
      },
      es: {
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_services: "Servicios",
        nav_pricing: "Precios",
        nav_contact: "Contacto",
        contact_heading: "Contáctanos",
        contact_subtext: "Hagamos realidad tus ideas. ¡Estamos aquí para ayudarte!",
        form_title: "Enviar un mensaje",
        send_button: "Enviar",
        get_in_touch: "Ponte en contacto"
      }
    };

    function changeLanguage(lang) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }