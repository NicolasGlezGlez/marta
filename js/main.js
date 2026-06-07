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
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const b1   = document.getElementById('hb1');
  const b2   = document.getElementById('hb2');
  const b3   = document.getElementById('hb3');
  let open   = false;

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


/* ---- Generación dinámica de galería ---- */
(function () {
  const PHOTOS = [
    // Exterior (35 fotos)
    { src: 'photos/arquitectura/ext-01.jpg',  cat: 'exterior', alt: 'Exterior 01'  },
    { src: 'photos/arquitectura/ext-02.jpg',  cat: 'exterior', alt: 'Exterior 02'  },
    { src: 'photos/arquitectura/ext-03.jpg',  cat: 'exterior', alt: 'Exterior 03'  },
    { src: 'photos/arquitectura/ext-04.jpg',  cat: 'exterior', alt: 'Exterior 04'  },
    { src: 'photos/arquitectura/ext-05.jpg',  cat: 'exterior', alt: 'Exterior 05'  },
    { src: 'photos/arquitectura/ext-06.jpg',  cat: 'exterior', alt: 'Exterior 06'  },
    { src: 'photos/arquitectura/ext-07.jpg',  cat: 'exterior', alt: 'Exterior 07'  },
    { src: 'photos/arquitectura/ext-08.jpg',  cat: 'exterior', alt: 'Exterior 08'  },
    { src: 'photos/arquitectura/ext-09.jpg',  cat: 'exterior', alt: 'Exterior 09'  },
    { src: 'photos/arquitectura/ext-10.jpg',  cat: 'exterior', alt: 'Exterior 10'  },
    { src: 'photos/arquitectura/ext-11.jpg',  cat: 'exterior', alt: 'Exterior 11'  },
    { src: 'photos/arquitectura/ext-12.jpg',  cat: 'exterior', alt: 'Exterior 12'  },
    { src: 'photos/arquitectura/ext-13.jpg',  cat: 'exterior', alt: 'Exterior 13'  },
    { src: 'photos/arquitectura/ext-14.jpg',  cat: 'exterior', alt: 'Exterior 14'  },
    { src: 'photos/arquitectura/ext-15.jpg',  cat: 'exterior', alt: 'Exterior 15'  },
    { src: 'photos/arquitectura/ext-16.jpg',  cat: 'exterior', alt: 'Exterior 16'  },
    { src: 'photos/arquitectura/ext-17.jpg',  cat: 'exterior', alt: 'Exterior 17'  },
    { src: 'photos/arquitectura/ext-18.jpg',  cat: 'exterior', alt: 'Exterior 18'  },
    { src: 'photos/arquitectura/ext-19.jpg',  cat: 'exterior', alt: 'Exterior 19'  },
    { src: 'photos/arquitectura/ext-20.jpg',  cat: 'exterior', alt: 'Exterior 20'  },
    { src: 'photos/arquitectura/ext-21.jpg',  cat: 'exterior', alt: 'Exterior 21'  },
    { src: 'photos/arquitectura/ext-22.jpg',  cat: 'exterior', alt: 'Exterior 22'  },
    { src: 'photos/arquitectura/ext-23.jpg',  cat: 'exterior', alt: 'Exterior 23'  },
    { src: 'photos/arquitectura/ext-24.jpg',  cat: 'exterior', alt: 'Exterior 24'  },
    { src: 'photos/arquitectura/ext-25.jpg',  cat: 'exterior', alt: 'Exterior 25'  },
    { src: 'photos/arquitectura/ext-26.jpg',  cat: 'exterior', alt: 'Exterior 26'  },
    { src: 'photos/arquitectura/ext-27.jpg',  cat: 'exterior', alt: 'Exterior 27'  },
    // Interior (46 fotos)
    { src: 'photos/arquitectura/int-01.jpg',  cat: 'interior', alt: 'Interior 01'  },
    { src: 'photos/arquitectura/int-02.jpg',  cat: 'interior', alt: 'Interior 02'  },
    { src: 'photos/arquitectura/int-03.jpg',  cat: 'interior', alt: 'Interior 03'  },
    { src: 'photos/arquitectura/int-04.jpg',  cat: 'interior', alt: 'Interior 04'  },
    { src: 'photos/arquitectura/int-05.jpg',  cat: 'interior', alt: 'Interior 05'  },
    { src: 'photos/arquitectura/int-06.jpg',  cat: 'interior', alt: 'Interior 06'  },
    { src: 'photos/arquitectura/int-07.jpg',  cat: 'interior', alt: 'Interior 07'  },
    { src: 'photos/arquitectura/int-08.jpg',  cat: 'interior', alt: 'Interior 08'  },
    { src: 'photos/arquitectura/int-09.jpg',  cat: 'interior', alt: 'Interior 09'  },
    { src: 'photos/arquitectura/int-10.jpg',  cat: 'interior', alt: 'Interior 10'  },
    { src: 'photos/arquitectura/int-11.jpg',  cat: 'interior', alt: 'Interior 11'  },
    { src: 'photos/arquitectura/int-12.jpg',  cat: 'interior', alt: 'Interior 12'  },
    { src: 'photos/arquitectura/int-13.jpg',  cat: 'interior', alt: 'Interior 13'  },
    { src: 'photos/arquitectura/int-14.jpg',  cat: 'interior', alt: 'Interior 14'  },
    { src: 'photos/arquitectura/int-15.jpg',  cat: 'interior', alt: 'Interior 15'  },
    { src: 'photos/arquitectura/int-16.jpg',  cat: 'interior', alt: 'Interior 16'  },
    { src: 'photos/arquitectura/int-17.jpg',  cat: 'interior', alt: 'Interior 17'  },
    { src: 'photos/arquitectura/int-18.jpg',  cat: 'interior', alt: 'Interior 18'  },
    { src: 'photos/arquitectura/int-19.jpg',  cat: 'interior', alt: 'Interior 19'  },
    { src: 'photos/arquitectura/int-20.jpg',  cat: 'interior', alt: 'Interior 20'  },
    { src: 'photos/arquitectura/int-21.jpg',  cat: 'interior', alt: 'Interior 21'  },
    { src: 'photos/arquitectura/int-22.jpg',  cat: 'interior', alt: 'Interior 22'  },
    { src: 'photos/arquitectura/int-23.jpg',  cat: 'interior', alt: 'Interior 23'  },
    { src: 'photos/arquitectura/int-24.jpg',  cat: 'interior', alt: 'Interior 24'  },
    { src: 'photos/arquitectura/int-25.jpg',  cat: 'interior', alt: 'Interior 25'  },
    { src: 'photos/arquitectura/int-26.jpg',  cat: 'interior', alt: 'Interior 26'  },
    { src: 'photos/arquitectura/int-27.jpg',  cat: 'interior', alt: 'Interior 27'  },
    { src: 'photos/arquitectura/int-28.jpg',  cat: 'interior', alt: 'Interior 28'  },
    { src: 'photos/arquitectura/int-29.jpg',  cat: 'interior', alt: 'Interior 29'  },
    { src: 'photos/arquitectura/int-30.jpg',  cat: 'interior', alt: 'Interior 30'  },
    { src: 'photos/arquitectura/int-31.jpg',  cat: 'interior', alt: 'Interior 31'  },
    { src: 'photos/arquitectura/int-32.jpg',  cat: 'interior', alt: 'Interior 32'  },
    { src: 'photos/arquitectura/int-33.jpg',  cat: 'interior', alt: 'Interior 33'  },
    // Urbano (28 fotos)
    { src: 'photos/arquitectura/urb-01.jpg',  cat: 'urbano',   alt: 'Urbano 01'    },
    { src: 'photos/arquitectura/urb-02.jpg',  cat: 'urbano',   alt: 'Urbano 02'    },
    { src: 'photos/arquitectura/urb-03.jpg',  cat: 'urbano',   alt: 'Urbano 03'    },
    { src: 'photos/arquitectura/urb-04.jpg',  cat: 'urbano',   alt: 'Urbano 04'    },
    { src: 'photos/arquitectura/urb-05.jpg',  cat: 'urbano',   alt: 'Urbano 05'    },
    { src: 'photos/arquitectura/urb-06.jpg',  cat: 'urbano',   alt: 'Urbano 06'    },
    { src: 'photos/arquitectura/urb-07.jpg',  cat: 'urbano',   alt: 'Urbano 07'    },
    { src: 'photos/arquitectura/urb-08.jpg',  cat: 'urbano',   alt: 'Urbano 08'    },
    { src: 'photos/arquitectura/urb-09.jpg',  cat: 'urbano',   alt: 'Urbano 09'    },
    { src: 'photos/arquitectura/urb-10.jpg',  cat: 'urbano',   alt: 'Urbano 10'    },
    { src: 'photos/arquitectura/urb-11.jpg',  cat: 'urbano',   alt: 'Urbano 11'    },
    { src: 'photos/arquitectura/urb-12.jpg',  cat: 'urbano',   alt: 'Urbano 12'    },
    { src: 'photos/arquitectura/urb-13.jpg',  cat: 'urbano',   alt: 'Urbano 13'    },
    { src: 'photos/arquitectura/urb-14.jpg',  cat: 'urbano',   alt: 'Urbano 14'    },
    { src: 'photos/arquitectura/urb-15.jpg',  cat: 'urbano',   alt: 'Urbano 15'    },
    { src: 'photos/arquitectura/urb-16.jpg',  cat: 'urbano',   alt: 'Urbano 16'    },
    { src: 'photos/arquitectura/urb-17.jpg',  cat: 'urbano',   alt: 'Urbano 17'    },
    { src: 'photos/arquitectura/urb-18.jpg',  cat: 'urbano',   alt: 'Urbano 18'    },
    { src: 'photos/arquitectura/urb-19.jpg',  cat: 'urbano',   alt: 'Urbano 19'    },
    { src: 'photos/arquitectura/urb-20.jpg',  cat: 'urbano',   alt: 'Urbano 20'    },
    { src: 'photos/arquitectura/urb-21.jpg',  cat: 'urbano',   alt: 'Urbano 21'    },
  ];

  const LABEL = { exterior: 'Exterior', interior: 'Interior', urbano: 'Urbano' };

  const grid = document.getElementById('gallery');
  if (!grid) return;

  const BATCH = 9;
  let activeFilter = 'todas';
  let rendered = 0;

  function filtered() {
    return activeFilter === 'todas'
      ? PHOTOS
      : PHOTOS.filter(p => p.cat === activeFilter);
  }

  function renderItem(p, idx) {
    const div = document.createElement('div');
    div.className = 'gal-item';
    div.dataset.category = p.cat;
    div.dataset.index = idx;
    div.tabIndex = 0;
    div.role = 'button';
    div.setAttribute('aria-label', `Ver foto ${LABEL[p.cat]}`);
    div.innerHTML = `
      <img src="${p.src}" alt="${p.alt}" loading="lazy">
      <div class="gal-overlay">
        <span class="gal-overlay__label">${LABEL[p.cat]}</span>
      </div>`;
    grid.appendChild(div);
  }

  function loadMore() {
    const list = filtered();
    const end = Math.min(rendered + BATCH, list.length);
    for (let i = rendered; i < end; i++) renderItem(list[i], i);
    rendered = end;
    updateSentinel();
  }

  function resetAndLoad() {
    grid.innerHTML = '';
    rendered = 0;
    loadMore();
  }

  // Sentinel para infinite scroll
  const sentinel = document.createElement('div');
  sentinel.id = 'gallery-sentinel';
  sentinel.style.cssText = 'grid-column: 1 / -1; height: 1px;';
  grid.parentNode.appendChild(sentinel);

  function updateSentinel() {
    const list = filtered();
    sentinel.style.display = rendered >= list.length ? 'none' : '';
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) loadMore(); });
  }, { rootMargin: '400px 0px' });
  io.observe(sentinel);

  resetAndLoad();

  // ---- Filtro ----
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      resetAndLoad();
    });
  });

  // ---- Lightbox con navegación ----
  const lb    = document.getElementById('lightbox');
  const img   = document.getElementById('lightboxImg');
  const label = document.getElementById('lightboxLabel');
  let currentIdx = 0;

  function visibleItems() {
    return Array.from(document.querySelectorAll('#gallery [data-category]'))
      .filter(el => el.style.display !== 'none');
  }

  function openLightbox(idx) {
    currentIdx = idx;
    const item = visibleItems()[idx];
    if (!item) return;
    const i = item.querySelector('img');
    const s = item.querySelector('.gal-overlay__label');
    img.src           = i ? i.src : '';
    img.alt           = i ? i.alt : '';
    label.textContent = s ? s.textContent : '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 200);
  }

  function navigate(dir) {
    const items = visibleItems();
    currentIdx = (currentIdx + dir + items.length) % items.length;
    const item = items[currentIdx];
    const i    = item.querySelector('img');
    const s    = item.querySelector('.gal-overlay__label');
    img.src           = i ? i.src : '';
    img.alt           = i ? i.alt : '';
    label.textContent = s ? s.textContent : '';
  }

  window.closeLightbox = closeLightbox;

  // Eventos en items
  grid.addEventListener('click', e => {
    const item = e.target.closest('.gal-item');
    if (!item) return;
    const items = visibleItems();
    const idx   = items.indexOf(item);
    if (idx !== -1) openLightbox(idx);
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('.gal-item');
    if (!item) return;
    e.preventDefault();
    item.click();
  });

  // Botones nav lightbox
  const prevBtn = document.getElementById('lbPrev');
  const nextBtn = document.getElementById('lbNext');
  if (prevBtn) prevBtn.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
  if (nextBtn) nextBtn.addEventListener('click', e => { e.stopPropagation(); navigate(+1); });

  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(+1);
  });
})();
