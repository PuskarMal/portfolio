// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
