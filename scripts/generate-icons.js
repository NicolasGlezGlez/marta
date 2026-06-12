const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '..', 'docs', 'logo.jpeg');
const ROOT = path.join(__dirname, '..');

const sizes = [
  { name: 'favicon-16.png',       size: 16  },
  { name: 'favicon-32.png',       size: 32  },
  { name: 'favicon-48.png',       size: 48  },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png',         size: 192 },
  { name: 'icon-512.png',         size: 512 },
];

(async () => {
  // Crop a square and pad with white if needed
  const meta = await sharp(SRC).metadata();
  const side = Math.min(meta.width, meta.height);
  const base = await sharp(SRC)
    .extract({
      left: Math.floor((meta.width - side) / 2),
      top: Math.floor((meta.height - side) / 2),
      width: side,
      height: side,
    })
    .toBuffer();

  for (const { name, size } of sizes) {
    await sharp(base)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(ROOT, name));
    console.log(`${name}  ${size}x${size}`);
  }

  // OG image 1200x630 (logo centered on white)
  await sharp(base)
    .resize(500, 500, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({
      top: 65, bottom: 65, left: 350, right: 350,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(ROOT, 'og-image.jpg'));
  console.log('og-image.jpg  1200x630');
})();

/* NOTA (jun 2026): los iconos actuales se generan con ImageMagick
   (logo sobre cuadrado redondeado morado #A380B6), no con el flujo
   de arriba. Comandos:
     convert docs/logo.jpeg -fuzz 8% -transparent white -trim +repage art.png
     convert -size 512x512 xc:none -fill "#A380B6" -draw "roundrectangle 0,0,511,511,120,120" bg.png
     convert art.png -resize 410x410 art512.png
     composite -gravity center art512.png bg.png master512.png
     # favicon-16/32/48, icon-192/512 = resize de master512
     # apple-touch-icon = igual pero fondo cuadrado sin transparencia
