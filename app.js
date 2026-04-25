// ============================================================
//  SIMPLE ANALYSIS — APP
//  Reads content.js and builds the page. Don't edit this file.
//  All your content changes go in content.js
// ============================================================

(function () {

  const C = CONTENT;
  const year = new Date().getFullYear();

  // Icons map
  const ICONS = {
    document: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    chart:    `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="7 10 10 13 17 8"/></svg>`,
    people:   `<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75"/><path d="M21 21v-2a4 4 0 00-3-3.87"/></svg>`
  };

  const ICON_STYLES = [
    { bg: '#e8f0fb', stroke: '#1a2e6e' },
    { bg: '#e0f2ef', stroke: '#1e7a6e' },
    { bg: '#e8f5ee', stroke: '#4a9b6f' }
  ];

  // ── NAVIGATION ──
  function buildNav() {
    const ul = document.getElementById('nav-links');
    const mob = document.getElementById('mobile-links');
    if (!ul) return;

    C.nav.links.forEach((label, i) => {
      const href = '#' + label.toLowerCase().replace(/\s+/g, '-');
      const li = document.createElement('li');
      const isLast = i === C.nav.links.length - 1;
      li.innerHTML = `<a href="${href}"${isLast ? ' class="nav-cta"' : ''}>${label}</a>`;
      ul.appendChild(li);

      const liM = document.createElement('li');
      liM.innerHTML = `<a href="${href}">${label}</a>`;
      if (mob) mob.appendChild(liM);
    });
  }

  // ── MOBILE TOGGLE ──
  function buildMobileToggle() {
    const btn = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  // ── HERO ──
  function buildHero() {
    const h = C.hero;
    setText('hero-eyebrow', h.eyebrow);
    setText('hero-heading', h.heading);
    setText('hero-sub', h.subheading);
    setLink('hero-cta-primary', h.cta_primary, `mailto:${C.email}`);
    setLink('hero-cta-secondary', h.cta_secondary + ' →', '#services');
  }

  // ── SERVICES ──
  function buildServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    C.services.forEach((s, i) => {
      const style = ICON_STYLES[i % ICON_STYLES.length];
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="service-icon" style="background:${style.bg};">
          <svg viewBox="0 0 24 24" style="stroke:${style.stroke};" width="19" height="19" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            ${ICONS[s.icon] ? ICONS[s.icon].replace(/<svg[^>]*>|<\/svg>/g, '') : ''}
          </svg>
        </div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      `;
      grid.appendChild(card);
    });
  }

  // ── PRODUCTS ──
  function buildProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    C.products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card' + (p.live ? ' featured' : ' coming-soon');

      card.innerHTML = `
        ${p.live ? '<span class="product-badge">Live</span>' : ''}
        <p class="product-tag${p.live ? '' : ' muted'}">${p.tag}</p>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${p.live && p.url
          ? `<a class="product-link" href="${p.url}" target="_blank" rel="noopener">Visit ${p.name} →</a>`
          : '<span class="coming-soon-label">Stay tuned</span>'
        }
      `;
      grid.appendChild(card);
    });
  }

  // ── TESTIMONIALS ──
  function buildTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    const placeholder = document.getElementById('testimonials-placeholder');
    if (!grid) return;

    if (!C.testimonials || C.testimonials.length === 0) {
      if (placeholder) placeholder.style.display = 'block';
      return;
    }

    C.testimonials.forEach(t => {
      const initials = t.name.split(' ').map(n => n[0]).join('').toUpperCase();
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        ${t.logo ? `<img class="testimonial-logo" src="images/testimonials/${t.logo}" alt="${t.company} logo" />` : ''}
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${initials}</div>
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}${t.company ? ', ' + t.company : ''}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ── CTA ──
  function buildCTA() {
    const el = document.getElementById('cta-email');
    if (el) el.href = `mailto:${C.email}`;
  }

  // ── FOOTER ──
  function buildFooter() {
    setText('footer-copy', `© ${year} ${C.footer.copyright}`);
  }

  // ── HELPERS ──
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setLink(id, label, href) {
    const el = document.getElementById(id);
    if (el) { el.textContent = label; el.href = href; }
  }

  // ── INIT ──
  buildNav();
  buildMobileToggle();
  buildHero();
  buildServices();
  buildProducts();
  buildTestimonials();
  buildCTA();
  buildFooter();

})();
