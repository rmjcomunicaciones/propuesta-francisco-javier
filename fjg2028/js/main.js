/* ===================================================
   FRANCISCO JAVIER GARCÍA 2028
   main.js — Interactividad y animaciones
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── PARTICLES ──
  const container = document.getElementById('particles-container');
  if (container) {
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 15 + 10}s;
        animation-delay:${Math.random() * 10}s;
      `;
      container.appendChild(p);
    }
  }

  // ── NAV: scroll behavior ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  // ── STAT ITEMS: animate on scroll ──
  const statItems = document.querySelectorAll('.stat-item');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statItems.forEach(el => statObserver.observe(el));

  // ── CANAL BARS: animate widths on scroll ──
  const bars = document.querySelectorAll('.canal-bar');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        setTimeout(() => { bar.style.width = width + '%'; }, 200);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => barObserver.observe(bar));

  // ── SMOOTH SCROLL for all anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── COUNTER ANIMATION for stat numbers ──
  function animateCounter(el, target, suffix = '', duration = 1500) {
    const start = 0;
    const startTime = performance.now();
    const isPlus = suffix.includes('+');
    const cleanTarget = parseInt(target.toString().replace(/\D/g, ''));

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * cleanTarget);
      el.textContent = (target.toString().startsWith('#') ? '#' : '') + current + (isPlus ? '+' : '');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  const statNums = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const val = el.textContent.trim();
        animateCounter(el, val);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.8 });
  statNums.forEach(el => counterObserver.observe(el));

  // ── NARR STEPS: stagger reveal ──
  const narrSteps = document.querySelectorAll('.narr-step');
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 150);
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  narrSteps.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    stepObserver.observe(el);
  });

  // ── PROPUESTA CARDS: stagger ──
  const cards = document.querySelectorAll('.propuesta-card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, background 0.4s';
    cardObserver.observe(el);
  });

  // ── TIMELINE ITEMS ──
  const tlItems = document.querySelectorAll('.tl-item');
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 120);
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  tlItems.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    tlObserver.observe(el);
  });

});
