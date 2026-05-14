/* ─────────────────────────────────────────────────────────────────────────────
   MappaHub — Landing Page Script
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Nav scroll effect ─────────────────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        nav.classList.toggle('scrolled', window.scrollY > 12);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* ── Mobile menu ───────────────────────────────────────────────────────────── */
(function () {
  const toggle = document.getElementById('mobileToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  function close() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link inside the menu is clicked
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', close);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

/* ── FAQ accordion ─────────────────────────────────────────────────────────── */
(function () {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      items.forEach(function (other) {
        if (other === item) return;
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherBtn)    otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.style.maxHeight = '0';
      });

      // Toggle current
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* ── Smooth scroll for anchor links ───────────────────────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 12;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();

/* ── Intersection Observer — fade-in on scroll ─────────────────────────────── */
(function () {
  if (!window.IntersectionObserver) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity .55s ease, transform .55s ease; }
    .reveal.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.feature-card, .step, .pricing-card, .faq-item, .section-header, .stats-bar'
  );

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    // Stagger cards
    if (el.classList.contains('feature-card') || el.classList.contains('pricing-card')) {
      el.style.transitionDelay = (i % 3) * 80 + 'ms';
    }
    observer.observe(el);
  });
})();
