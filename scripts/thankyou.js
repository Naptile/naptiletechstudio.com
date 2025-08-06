 AOS.init({ once: true });

    let timeLeft = 5;
    const countdownElement = document.getElementById('countdown');
    const section = document.getElementById('thankyou-section');

    const timer = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        section.style.opacity = '0';
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      }
    }, 1000);