const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '..', 'photos', 'arquitectura');
const DST = path.join(SRC, 'optimized');

const MAX_WIDTH = 2400;
const QUALITY = 88;

if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

const files = fs.readdirSync(SRC).filter(f => /\.jpe?g$/i.test(f));
console.log(`Optimizando ${files.length} fotos -> ${DST}\n`);

let totalIn = 0, totalOut = 0, done = 0;

(async () => {
  for (const file of files) {
    const inPath = path.join(SRC, file);
    const outPath = path.join(DST, file);
    const sizeIn = fs.statSync(inPath).size;
    totalIn += sizeIn;

    await sharp(inPath)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(outPath);

    const sizeOut = fs.statSync(outPath).size;
    totalOut += sizeOut;
    done++;
    const pct = ((1 - sizeOut / sizeIn) * 100).toFixed(0);
    console.log(`[${done}/${files.length}] ${file}  ${(sizeIn/1024/1024).toFixed(1)}MB -> ${(sizeOut/1024).toFixed(0)}KB  (-${pct}%)`);
  }

  console.log(`\nTotal: ${(totalIn/1024/1024).toFixed(0)}MB -> ${(totalOut/1024/1024).toFixed(0)}MB  (${((1 - totalOut/totalIn) * 100).toFixed(0)}% menos)`);
})();
