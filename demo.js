// Nukleo — Page DÉMO — Interactions + Scroll Animations

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer — révélation au scroll
  const animEls = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  animEls.forEach((el) => observer.observe(el));

  // Frame projets : slide au clic sur panneaux latéraux
  let activeProjectIndex = 1;
  const slides = document.querySelectorAll('.projet-slide');
  const lateralLeft = document.querySelector('.lateral-left');
  const lateralRight = document.querySelector('.lateral-right');
  const topbar = document.querySelector('.projet-topbar');

  function goToProject(index) {
    if (index === activeProjectIndex) return;
    const direction = index > activeProjectIndex ? 'right' : 'left';

    slides.forEach((slide) => slide.classList.remove('active', 'slide-from-left'));

    const targetSlide = document.querySelector(`.projet-slide[data-index="${index}"]`);
    if (!targetSlide) return;

    if (direction === 'left') {
      targetSlide.classList.add('slide-from-left');
      targetSlide.offsetHeight; // reflow
    }
    targetSlide.classList.add('active');
    activeProjectIndex = index;
  }

  lateralLeft?.addEventListener('click', () => goToProject(0));
  lateralRight?.addEventListener('click', () => goToProject(2));
  topbar?.addEventListener('click', () => goToProject(1));

  // Drawer (conservé si réutilisé ailleurs)
  const drawer = document.getElementById('project-drawer');
  const drawerClose = document.querySelector('.drawer-close');

  function closeDrawer() {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  drawerClose?.addEventListener('click', closeDrawer);
  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Newsletter form (placeholder)
  document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    if (input?.value) {
      alert('Merci ! Vous êtes inscrit à la boîte nouvelle.');
      input.value = '';
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
