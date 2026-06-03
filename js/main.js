/* ============================================================
   MARTA PORTELA GONZÁLEZ — Scripts
   ============================================================ */

/* ---- SPA: Navegación entre páginas ---- */

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === id);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- Menú móvil ---- */
(function () {
  const btn    = document.getElementById('hamburger');
  const menu   = document.getElementById('mobileMenu');
  const b1     = document.getElementById('hb1');
  const b2     = document.getElementById('hb2');
  const b3     = document.getElementById('hb3');
  let open     = false;

  function openMenu() {
    open = true;
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    b1.style.transform = 'rotate(45deg) translate(4px, 4px)';
    b3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
    b2.style.opacity   = '0';
  }

  function closeMenu() {
    open = false;
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    b1.style.transform = b3.style.transform = '';
    b2.style.opacity   = '1';
  }

  window.closeMenu = closeMenu;

  btn.addEventListener('click', () => open ? closeMenu() : openMenu());
})();

/* ---- Filtro de galería ---- */
(function () {
  const btns  = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('#gallery [data-category]');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.dataset.filter;
      items.forEach(item => {
        item.style.display = (f === 'todas' || item.dataset.category === f) ? '' : 'none';
      });
    });
  });
})();

/* ---- Lightbox ---- */
(function () {
  const lb    = document.getElementById('lightbox');
  const img   = document.getElementById('lightboxImg');
  const label = document.getElementById('lightboxLabel');

  function open(src, alt, cat) {
    img.src           = src.replace('w=800', 'w=1600');
    img.alt           = alt;
    label.textContent = cat || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 200);
  }

  window.closeLightbox = close;

  /* Abrir al hacer clic en cada foto */
  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => {
      const i = item.querySelector('img');
      const s = item.querySelector('.gal-overlay__label');
      if (i) open(i.src, i.alt, s ? s.textContent : '');
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  /* CTA card: abre la primera foto de la galería */
  const ctaCard = document.getElementById('galCta');
  if (ctaCard) {
    ctaCard.addEventListener('click', () => {
      const first = document.querySelector('.gal-item img');
      if (first) open(first.src, first.alt, 'Galería completa');
    });
    ctaCard.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ctaCard.click(); }
    });
  }

  /* Cerrar con Escape o clic en fondo */
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
