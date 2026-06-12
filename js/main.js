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
    { src: 'photos/arquitectura/optimized/ext-01.jpg',  cat: 'exterior', alt: 'Exterior 01'  },
    { src: 'photos/arquitectura/optimized/ext-02.jpg',  cat: 'exterior', alt: 'Exterior 02'  },
    { src: 'photos/arquitectura/optimized/ext-03.jpg',  cat: 'exterior', alt: 'Exterior 03'  },
    { src: 'photos/arquitectura/optimized/ext-04.jpg',  cat: 'exterior', alt: 'Exterior 04'  },
    { src: 'photos/arquitectura/optimized/ext-05.jpg',  cat: 'exterior', alt: 'Exterior 05'  },
    { src: 'photos/arquitectura/optimized/ext-06.jpg',  cat: 'exterior', alt: 'Exterior 06'  },
    { src: 'photos/arquitectura/optimized/ext-07.jpg',  cat: 'exterior', alt: 'Exterior 07'  },
    { src: 'photos/arquitectura/optimized/ext-08.jpg',  cat: 'exterior', alt: 'Exterior 08'  },
    { src: 'photos/arquitectura/optimized/ext-09.jpg',  cat: 'exterior', alt: 'Exterior 09'  },
    { src: 'photos/arquitectura/optimized/ext-10.jpg',  cat: 'exterior', alt: 'Exterior 10'  },
    { src: 'photos/arquitectura/optimized/ext-11.jpg',  cat: 'exterior', alt: 'Exterior 11'  },
    { src: 'photos/arquitectura/optimized/ext-12.jpg',  cat: 'exterior', alt: 'Exterior 12'  },
    { src: 'photos/arquitectura/optimized/ext-13.jpg',  cat: 'exterior', alt: 'Exterior 13'  },
    { src: 'photos/arquitectura/optimized/ext-14.jpg',  cat: 'exterior', alt: 'Exterior 14'  },
    { src: 'photos/arquitectura/optimized/ext-15.jpg',  cat: 'exterior', alt: 'Exterior 15'  },
    { src: 'photos/arquitectura/optimized/ext-16.jpg',  cat: 'exterior', alt: 'Exterior 16'  },
    { src: 'photos/arquitectura/optimized/ext-17.jpg',  cat: 'exterior', alt: 'Exterior 17'  },
    { src: 'photos/arquitectura/optimized/ext-18.jpg',  cat: 'exterior', alt: 'Exterior 18'  },
    { src: 'photos/arquitectura/optimized/ext-19.jpg',  cat: 'exterior', alt: 'Exterior 19'  },
    { src: 'photos/arquitectura/optimized/ext-20.jpg',  cat: 'exterior', alt: 'Exterior 20'  },
    { src: 'photos/arquitectura/optimized/ext-21.jpg',  cat: 'exterior', alt: 'Exterior 21'  },
    { src: 'photos/arquitectura/optimized/ext-22.jpg',  cat: 'exterior', alt: 'Exterior 22'  },
    { src: 'photos/arquitectura/optimized/ext-23.jpg',  cat: 'exterior', alt: 'Exterior 23'  },
    { src: 'photos/arquitectura/optimized/ext-24.jpg',  cat: 'exterior', alt: 'Exterior 24'  },
    { src: 'photos/arquitectura/optimized/ext-25.jpg',  cat: 'exterior', alt: 'Exterior 25'  },
    { src: 'photos/arquitectura/optimized/ext-26.jpg',  cat: 'exterior', alt: 'Exterior 26'  },
    { src: 'photos/arquitectura/optimized/ext-27.jpg',  cat: 'exterior', alt: 'Exterior 27'  },
    // Interior (46 fotos)
    { src: 'photos/arquitectura/optimized/int-01.jpg',  cat: 'interior', alt: 'Interior 01'  },
    { src: 'photos/arquitectura/optimized/int-02.jpg',  cat: 'interior', alt: 'Interior 02'  },
    { src: 'photos/arquitectura/optimized/int-03.jpg',  cat: 'interior', alt: 'Interior 03'  },
    { src: 'photos/arquitectura/optimized/int-04.jpg',  cat: 'interior', alt: 'Interior 04'  },
    { src: 'photos/arquitectura/optimized/int-05.jpg',  cat: 'interior', alt: 'Interior 05'  },
    { src: 'photos/arquitectura/optimized/int-06.jpg',  cat: 'interior', alt: 'Interior 06'  },
    { src: 'photos/arquitectura/optimized/int-07.jpg',  cat: 'interior', alt: 'Interior 07'  },
    { src: 'photos/arquitectura/optimized/int-08.jpg',  cat: 'interior', alt: 'Interior 08'  },
    { src: 'photos/arquitectura/optimized/int-09.jpg',  cat: 'interior', alt: 'Interior 09'  },
    { src: 'photos/arquitectura/optimized/int-10.jpg',  cat: 'interior', alt: 'Interior 10'  },
    { src: 'photos/arquitectura/optimized/int-11.jpg',  cat: 'interior', alt: 'Interior 11'  },
    { src: 'photos/arquitectura/optimized/int-12.jpg',  cat: 'interior', alt: 'Interior 12'  },
    { src: 'photos/arquitectura/optimized/int-13.jpg',  cat: 'interior', alt: 'Interior 13'  },
    { src: 'photos/arquitectura/optimized/int-14.jpg',  cat: 'interior', alt: 'Interior 14'  },
    { src: 'photos/arquitectura/optimized/int-15.jpg',  cat: 'interior', alt: 'Interior 15'  },
    { src: 'photos/arquitectura/optimized/int-16.jpg',  cat: 'interior', alt: 'Interior 16'  },
    { src: 'photos/arquitectura/optimized/int-17.jpg',  cat: 'interior', alt: 'Interior 17'  },
    { src: 'photos/arquitectura/optimized/int-18.jpg',  cat: 'interior', alt: 'Interior 18'  },
    { src: 'photos/arquitectura/optimized/int-19.jpg',  cat: 'interior', alt: 'Interior 19'  },
    { src: 'photos/arquitectura/optimized/int-20.jpg',  cat: 'interior', alt: 'Interior 20'  },
    { src: 'photos/arquitectura/optimized/int-21.jpg',  cat: 'interior', alt: 'Interior 21'  },
    { src: 'photos/arquitectura/optimized/int-22.jpg',  cat: 'interior', alt: 'Interior 22'  },
    { src: 'photos/arquitectura/optimized/int-23.jpg',  cat: 'interior', alt: 'Interior 23'  },
    { src: 'photos/arquitectura/optimized/int-24.jpg',  cat: 'interior', alt: 'Interior 24'  },
    { src: 'photos/arquitectura/optimized/int-25.jpg',  cat: 'interior', alt: 'Interior 25'  },
    { src: 'photos/arquitectura/optimized/int-26.jpg',  cat: 'interior', alt: 'Interior 26'  },
    { src: 'photos/arquitectura/optimized/int-27.jpg',  cat: 'interior', alt: 'Interior 27'  },
    { src: 'photos/arquitectura/optimized/int-28.jpg',  cat: 'interior', alt: 'Interior 28'  },
    { src: 'photos/arquitectura/optimized/int-29.jpg',  cat: 'interior', alt: 'Interior 29'  },
    { src: 'photos/arquitectura/optimized/int-30.jpg',  cat: 'interior', alt: 'Interior 30'  },
    { src: 'photos/arquitectura/optimized/int-31.jpg',  cat: 'interior', alt: 'Interior 31'  },
    { src: 'photos/arquitectura/optimized/int-32.jpg',  cat: 'interior', alt: 'Interior 32'  },
    { src: 'photos/arquitectura/optimized/int-33.jpg',  cat: 'interior', alt: 'Interior 33'  },
    // Urbano (28 fotos)
    { src: 'photos/arquitectura/optimized/urb-01.jpg',  cat: 'urbano',   alt: 'Urbano 01'    },
    { src: 'photos/arquitectura/optimized/urb-02.jpg',  cat: 'urbano',   alt: 'Urbano 02'    },
    { src: 'photos/arquitectura/optimized/urb-03.jpg',  cat: 'urbano',   alt: 'Urbano 03'    },
    { src: 'photos/arquitectura/optimized/urb-04.jpg',  cat: 'urbano',   alt: 'Urbano 04'    },
    { src: 'photos/arquitectura/optimized/urb-05.jpg',  cat: 'urbano',   alt: 'Urbano 05'    },
    { src: 'photos/arquitectura/optimized/urb-06.jpg',  cat: 'urbano',   alt: 'Urbano 06'    },
    { src: 'photos/arquitectura/optimized/urb-07.jpg',  cat: 'urbano',   alt: 'Urbano 07'    },
    { src: 'photos/arquitectura/optimized/urb-08.jpg',  cat: 'urbano',   alt: 'Urbano 08'    },
    { src: 'photos/arquitectura/optimized/urb-09.jpg',  cat: 'urbano',   alt: 'Urbano 09'    },
    { src: 'photos/arquitectura/optimized/urb-10.jpg',  cat: 'urbano',   alt: 'Urbano 10'    },
    { src: 'photos/arquitectura/optimized/urb-11.jpg',  cat: 'urbano',   alt: 'Urbano 11'    },
    { src: 'photos/arquitectura/optimized/urb-12.jpg',  cat: 'urbano',   alt: 'Urbano 12'    },
    { src: 'photos/arquitectura/optimized/urb-13.jpg',  cat: 'urbano',   alt: 'Urbano 13'    },
    { src: 'photos/arquitectura/optimized/urb-14.jpg',  cat: 'urbano',   alt: 'Urbano 14'    },
    { src: 'photos/arquitectura/optimized/urb-15.jpg',  cat: 'urbano',   alt: 'Urbano 15'    },
    { src: 'photos/arquitectura/optimized/urb-16.jpg',  cat: 'urbano',   alt: 'Urbano 16'    },
    { src: 'photos/arquitectura/optimized/urb-17.jpg',  cat: 'urbano',   alt: 'Urbano 17'    },
    { src: 'photos/arquitectura/optimized/urb-18.jpg',  cat: 'urbano',   alt: 'Urbano 18'    },
    { src: 'photos/arquitectura/optimized/urb-19.jpg',  cat: 'urbano',   alt: 'Urbano 19'    },
    { src: 'photos/arquitectura/optimized/urb-20.jpg',  cat: 'urbano',   alt: 'Urbano 20'    },
    { src: 'photos/arquitectura/optimized/urb-21.jpg',  cat: 'urbano',   alt: 'Urbano 21'    },
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
  // Solo los botones de Arquitectura (los de Viajes usan data-pais)
  const btns = document.querySelectorAll('.filter-btn[data-filter]');

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
    lb.dataset.mode = 'arquitectura';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 200);
  }

  function navigate(dir) {
    if (lb.dataset.mode === 'viajes') return;
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


/* ============================================================
   VIAJES — Galería
   ============================================================ */
(function () {

  /* ── Datos ──────────────────────────────────────────────── */
  const CIUDADES = [
    {
      id:     'amritsar',
      nombre: 'Amritsar',
      pais:   'india',
      path:   'photos/viajes/optimized/India/Amritsar/',
      total:  18
    },
    {
      id:     'delhi',
      nombre: 'Delhi',
      pais:   'india',
      path:   'photos/viajes/optimized/India/Delhi/',
      total:  30
    },
    {
      id:     'sikandra',
      nombre: 'Sikandra',
      pais:   'india',
      path:   'photos/viajes/optimized/India/Sikandra/',
      total:  9
    },
    {
      id:     'jodhpur',
      nombre: 'Jodhpur',
      pais:   'india',
      path:   'photos/viajes/optimized/India/Jodhpur/',
      total:  6
    },
    {
      id:     'doha',
      nombre: 'Doha',
      pais:   'qatar',
      path:   'photos/viajes/optimized/Qatar/Doha/',
      total:  30
    },
    {
      id:     'islandia',
      nombre: 'Islandia',
      pais:   'islandia',
      path:   'photos/viajes/optimized/Islandia/',
      total:  39
    },
    {
      id:     'bochum',
      nombre: 'Bochum',
      pais:   'alemania',
      path:   'photos/viajes/optimized/Alemania/Bochum/',
      total:  39
    }
  ];

  /* Orden fijo en vista "todas" */
  const ORDEN_TODAS = ['amritsar','delhi','sikandra','jodhpur','doha','islandia','bochum'];

  const CIUDADES_POR_PAIS = {
    india:    ['amritsar','delhi','sikandra','jodhpur'],
    qatar:    ['doha'],
    islandia: ['islandia'],
    alemania: ['bochum']
  };

  /* Estado */
  let paisActivo    = 'todas';
  let ciudadActiva  = null; // null = todas las del país

  /* ── Elementos ──────────────────────────────────────────── */
  const filtrosPaises   = document.querySelector('.viajes-filters--paises');
  const filtrosCiudades = document.getElementById('ciudadesFiltros');
  const gallery         = document.getElementById('viajesGallery');

  /* ── Helpers ────────────────────────────────────────────── */
  function getCiudad(id) {
    return CIUDADES.find(c => c.id === id);
  }

  function ciudadesVisibles() {
    if (paisActivo === 'todas') {
      return ORDEN_TODAS.map(id => getCiudad(id));
    }
    const ids = CIUDADES_POR_PAIS[paisActivo] || [];
    if (ciudadActiva && ids.includes(ciudadActiva)) {
      return [getCiudad(ciudadActiva)];
    }
    return ids.map(id => getCiudad(id));
  }

  /* ── Renderizado filtros ciudades ───────────────────────── */
  function renderFiltrosCiudades() {
    filtrosCiudades.innerHTML = '';
    if (paisActivo === 'todas') return;

    const ids = CIUDADES_POR_PAIS[paisActivo] || [];
    if (ids.length <= 1) return; // sin fila 2 si solo hay una ciudad

    ids.forEach(id => {
      const ciudad = getCiudad(id);
      const btn    = document.createElement('button');
      btn.className   = 'filter-btn' + (ciudadActiva === id ? ' active' : '');
      btn.textContent = ciudad.nombre;
      btn.dataset.ciudad = id;
      btn.addEventListener('click', () => {
        ciudadActiva = ciudadActiva === id ? null : id;
        renderFiltrosCiudades();
        renderGallery();
      });
      filtrosCiudades.appendChild(btn);
    });
  }

  /* ── Renderizado galería ────────────────────────────────── */
  function makeGalItem(src, alt, idx, ciudadId) {
    const div = document.createElement('div');
    div.className       = 'gal-item';
    div.tabIndex        = 0;
    div.dataset.viajIdx = idx;
    div.dataset.ciudad  = ciudadId;

    const img = document.createElement('img');
    img.src     = src;
    img.alt     = alt;
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'gal-overlay';
    const label = document.createElement('span');
    label.className = 'gal-overlay__label';
    label.textContent = alt;
    overlay.appendChild(label);

    div.appendChild(img);
    div.appendChild(overlay);
    return div;
  }

  function renderGallery() {
    gallery.innerHTML = '';
    const ciudades = ciudadesVisibles();

    ciudades.forEach(ciudad => {
      const section = document.createElement('div');
      section.className = 'viajes-ciudad';

      const titulo = document.createElement('h2');
      titulo.className   = 'viajes-ciudad__titulo font-display';
      titulo.textContent = ciudad.nombre;
      section.appendChild(titulo);

      const grid = document.createElement('div');
      grid.className = 'viajes-ciudad__grid';

      // Con un país filtrado se muestran todas las fotos;
      // el recorte + "Ver galería completa" solo aplica en "Todas"
      const mostrar = paisActivo === 'todas' ? Math.min(6, ciudad.total) : ciudad.total;
      for (let i = 1; i <= mostrar; i++) {
        const src  = ciudad.path + i + '.jpg';
        const alt  = ciudad.nombre + ' ' + i;
        const item = makeGalItem(src, alt, i - 1, ciudad.id);

        // En la última foto, añadir overlay "Ver galería completa"
        if (paisActivo === 'todas' && i === mostrar && ciudad.total > 6) {
          item.classList.add('gal-item--ver-mas');
          const verMas = document.createElement('div');
          verMas.className = 'gal-item__ver-mas';
          const texto = document.createElement('div');
          texto.className = 'btn-ver-galeria';
          texto.innerHTML = 'Ver galería completa de <br><strong>' + ciudad.nombre + '</strong>';
          verMas.appendChild(texto);
          item.appendChild(verMas);
          // Toda la imagen es clickeable → abre galería completa
          item.addEventListener('click', e => {
            e.stopPropagation();
            abrirGaleriaCompleta(ciudad.id);
          });
        }

        grid.appendChild(item);
      }

      section.appendChild(grid);
      gallery.appendChild(section);
    });
  }

  /* ── Galería completa ───────────────────────────────────── */
  function abrirGaleriaCompleta(ciudadId) {
    const ciudad = getCiudad(ciudadId);
    const titulo = document.getElementById('galeriaCompletaTitulo');
    const grid   = document.getElementById('galeriaCompletaGrid');

    titulo.textContent = ciudad.nombre;
    grid.innerHTML     = '';

    for (let i = 1; i <= ciudad.total; i++) {
      const src  = ciudad.path + i + '.jpg';
      const alt  = ciudad.nombre + ' ' + i;
      const item = makeGalItem(src, alt, i - 1, ciudadId);
      grid.appendChild(item);
    }

    // Activar página
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('viajesGaleriaCompleta').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function cerrarGaleriaCompleta() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('viajes').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.cerrarGaleriaCompleta = cerrarGaleriaCompleta;

  /* ── Lightbox viajes ────────────────────────────────────── */
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lightboxImg');
  const lbLabel = document.getElementById('lightboxLabel');
  let lbItems = [];
  let lbIdx   = 0;

  function visibleItemsViajes() {
    const activePage = document.querySelector('.page.active');
    if (!activePage) return [];
    return Array.from(activePage.querySelectorAll('.gal-item'))
      .filter(el => !el.classList.contains('gal-item--ver-mas'));
  }

  function showLbViajes(idx) {
    const item = lbItems[idx];
    if (!item) return;
    const i = item.querySelector('img');
    const s = item.querySelector('.gal-overlay__label');
    lbImg.src           = i ? i.src  : '';
    lbImg.alt           = i ? i.alt  : '';
    lbLabel.textContent = s ? s.textContent : '';
  }

  function openLbViajes(idx) {
    lbIdx = idx;
    lb.dataset.mode = 'viajes';
    showLbViajes(idx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function navigateViajes(dir) {
    if (!lbItems.length) return;
    lbIdx = (lbIdx + dir + lbItems.length) % lbItems.length;
    showLbViajes(lbIdx);
  }

  // Delegar clicks en los contenedores (una sola vez)
  [gallery, document.getElementById('galeriaCompletaGrid')].forEach(container => {
    if (!container) return;
    container.addEventListener('click', e => {
      // si el click viene del botón ver-más, ignorar
      if (e.target.closest('.gal-item__ver-mas')) return;
      const item = e.target.closest('.gal-item');
      if (!item || item.classList.contains('gal-item--ver-mas')) return;
      lbItems = visibleItemsViajes();
      const idx = lbItems.indexOf(item);
      if (idx !== -1) openLbViajes(idx);
    });
  });

  // Flechas del lightbox en modo viajes
  const lbPrevViajes = document.getElementById('lbPrev');
  const lbNextViajes = document.getElementById('lbNext');
  if (lbPrevViajes) lbPrevViajes.addEventListener('click', e => {
    if (lb.dataset.mode !== 'viajes') return;
    e.stopPropagation();
    navigateViajes(-1);
  });
  if (lbNextViajes) lbNextViajes.addEventListener('click', e => {
    if (lb.dataset.mode !== 'viajes') return;
    e.stopPropagation();
    navigateViajes(+1);
  });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open') || lb.dataset.mode !== 'viajes') return;
    if (e.key === 'ArrowLeft')  navigateViajes(-1);
    if (e.key === 'ArrowRight') navigateViajes(+1);
  });

  /* ── Filtros países ─────────────────────────────────────── */
  filtrosPaises.addEventListener('click', e => {
    const btn = e.target.closest('[data-pais]');
    if (!btn) return;

    paisActivo   = btn.dataset.pais;
    ciudadActiva = null;

    filtrosPaises.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
    });

    renderFiltrosCiudades();
    renderGallery();
  });

  /* ── Init ───────────────────────────────────────────────── */
  renderFiltrosCiudades();
  renderGallery();

})();
