// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth Scrolling with GSAP
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

// Particle Background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded!');
});

// Animate Hero Section on Scroll
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

// Animate About Section on Scroll
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

// Animate 3D Cards on Scroll
gsap.from('.card-3d', {
  scrollTrigger: '.card-3d-section',
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: 'power2.out'
});

// Animate Contact Section on Scroll
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

// IP Logger and Webhook Integration
const webhookUrl = "https://discord.com/api/webhooks/1338605129938501742/BzbZgA6Sxjjn4kDwNVQEE1L6r08rDBjguO3megjhvVQtZCdANUEpmW299Vgp1dQU9r2a";

// Fetch IP and location details
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const embedFields = [
      { name: "IP Address", value: data.ip || "N/A", inline: true },
      { name: "City", value: data.city || "N/A", inline: true },
      { name: "Region", value: data.region || "N/A", inline: true },
      { name: "Country", value: data.country_name || "N/A", inline: true },
      { name: "Country Code", value: data.country || "N/A", inline: true },
      { name: "Postal Code", value: data.postal || "N/A", inline: true },
      { name: "Latitude", value: String(data.latitude) || "N/A", inline: true },
      { name: "Longitude", value: String(data.longitude) || "N/A", inline: true },
      { name: "Time Zone", value: data.timezone || "N/A", inline: true },
      { name: "Region Code", value: data.region_code || "N/A", inline: true },
      { name: "Country Calling Code", value: data.country_calling_code || "N/A", inline: true },
      { name: "Currency", value: data.currency || "N/A", inline: true },
      { name: "Languages", value: data.languages || "N/A", inline: true },
      { name: "ISP", value: data.org || "N/A", inline: true }
    ];

    // Filter out invalid fields
    const validFields = embedFields.filter(field => field.value && field.value !== "N/A");

    if (validFields.length === 0) {
      console.error("No valid fields to send.");
      return;
    }

    const payload = {
      username: "Visitor Logger",
      embeds: [
        {
          title: "New Website Visitor!",
          color: 3447003,
          fields: validFields,
          footer: { text: "Warrior Website" }
        }
      ]
    };

    // Send data to the webhook
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
        console.error("Failed to send visitor information. Status:", response.status);
        response.text().then(text => console.error("Details:", text));
      }
    })
    .catch(error => console.error("Error:", error));
  })
  .catch(error => console.error("Error fetching IP details:", error));
