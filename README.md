Marta/
├── index.html          ← HTML limpio, sin estilos ni scripts inline
├── css/
│   └── styles.css      ← Todos los estilos (tokens, header, galería, lightbox…)
├── js/
│   └── main.js         ← Toda la lógica (navegación SPA, filtros, lightbox)
├── photos/
│   ├── arquitectura/   ← Sube aquí tus fotos con estos nombres:
│   │   ├── ext-01.jpg  (exterior)
│   │   ├── ext-02.jpg
│   │   ├── ext-03.jpg
│   │   ├── int-01.jpg  (interior)
│   │   ├── int-02.jpg
│   │   ├── det-01.jpg  (detalles)
│   │   ├── det-02.jpg
│   │   └── urb-01.jpg  (urbano)
│   └── naturaleza/     ← Para cuando añadas esa sección
└── docs/
    ├── logo.jpeg
    └── mockup.jpeg
Cómo subir tus fotos: copia tus archivos a photos/arquitectura/ con los nombres de arriba. Hasta que estén, cada celda carga automáticamente una imagen de demostración via onerror. Una vez que pongas tu foto, la demo desaparece sola