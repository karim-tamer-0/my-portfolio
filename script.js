// Smooth scroll (modern browsers already support it via CSS)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form simulation
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent! (Connect EmailJS for real emails)");
});
