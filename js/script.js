// Scroll Animation
const sections = document.querySelectorAll('[data-animate]');

function animateOnScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.setAttribute('data-animate-visible', '');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

// Mouse Animation (Simple Trail Effect)
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.classList.add('mouse-trail');
  document.body.appendChild(trail);
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;

  setTimeout(() => {
    trail.remove();
  }, 300);
});

// Search Bar
document.getElementById('search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.section').forEach((section) => {
    const text = section.textContent.toLowerCase();
    section.style.display = text.includes(query) ? 'block' : 'none';
  });
});
