 AOS.init({
      duration: 1000,
      once: true
    });

    function toggleMenu() {
      const nav = document.getElementById('nav-links');
      nav.classList.toggle('active');
    }

    // Close menu after clicking a link (for mobile)
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
      });
    });