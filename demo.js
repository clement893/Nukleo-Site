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
  // Drawer projets
  const drawer = document.getElementById('project-drawer');
  const projetCards = document.querySelectorAll('.projet-card');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer(projectId) {
    const content = drawer?.querySelector('.drawer-content');
    if (content) {
      content.innerHTML = `
        <h3>Projet ${projectId}</h3>
        <p>Description détaillée du projet. Images, métriques, témoignages client — contenu chargé dynamiquement.</p>
        <p style="margin-top:1rem;color:var(--gray-light)">View case study →</p>
      `;
    }
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  projetCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        openDrawer(card.dataset.id || '1');
      }
    });
  });

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
