const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: 'power2.inOut'
    });
  });
});

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded!');
});

gsap.from('.hero .title', {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5,
  ease: 'power2.out'
});

gsap.from('.hero .subtitle', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
  ease: 'power2.out'
});

gsap.from('.cta-button', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.5,
  ease: 'power2.out'
});

gsap.from('.about-section h2', {
  scrollTrigger: '.about-section',
  opacity: 0,
  y: -50,
  duration: 1,
  ease: 'power2.out'
});

gsap.from('.about-text', {
  scrollTrigger: '.about-section',
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: 'power2.out'
});

gsap.from('.card', {
  scrollTrigger: '.about-section',
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: 'power2.out'
});

gsap.from('.card-3d', {
  scrollTrigger: '.card-3d-section',
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: 'power2.out'
});

gsap.from('.contact-section h2', {
  scrollTrigger: '.contact-section',
  opacity: 0,
  y: -50,
  duration: 1,
  ease: 'power2.out'
});

gsap.from('.contact-form', {
  scrollTrigger: '.contact-section',
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out'
});

const webhookUrl = "https://discord.com/api/webhooks/1347191437980078100/A14rJyNd2Dn0KriaLQPnk8ng6R-xdo5Sk2MMk_KVNFBOFRFZYnPAHIbRhr8jAHAD1qyy";

fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const payload = {
      username: "Visitor Logger",
      embeds: [
        {
          title: "New Website Visitor!",
          color: 3447003,
          fields: [
            { name: "IP Address", value: data.ip, inline: true },
            { name: "City", value: data.city || "Unknown", inline: true },
            { name: "Country", value: data.country_name || "Unknown", inline: true },
            { name: "ISP", value: data.org || "Unknown", inline: true },
          ],
          footer: { text: "Warrior Website" }
        }
      ]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        console.log("Visitor information sent successfully!");
      } else {
        console.error("Failed to send visitor information.");
      }
    })
    .catch(error => console.error("Error:", error));
  })
  .catch(error => console.error("Error fetching IP details:", error));
