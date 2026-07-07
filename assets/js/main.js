/* =========================================================================
   إتقان برنت — main.js (Vanilla JS, no dependencies)
   ========================================================================= */
(() => {
  'use strict';

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mainNav.style.display = isOpen ? 'block' : '';
    });
  }

  /* ---------- Service filter tabs ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const svcCards = document.querySelectorAll('#svcGrid .svc-card');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.dataset.filter;
      svcCards.forEach(card => {
        const show = filter === 'all' || card.dataset.cat === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---------- Scroll-reveal animation (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Quote form: client-side validation + friendly submit ---------- */
  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'جارٍ الإرسال...';
      submitBtn.disabled = true;

      // Replace this block with a real fetch() call to your backend/CRM endpoint.
      setTimeout(() => {
        submitBtn.textContent = 'تم الإرسال ✓ سنتواصل معك قريبًا';
        quoteForm.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 900);
    });
  }

  /* ---------- Lazy-load fallback for browsers without native support ---------- */
  if (!('loading' in HTMLImageElement.prototype)) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.src; // no-op placeholder for manual lazy-load libs if ever needed
    });
  }
})();
