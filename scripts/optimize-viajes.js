const fs   = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE = '/sessions/confident-upbeat-noether/mnt/Marta/photos/viajes/optimized';
const MAX_WIDTH = 2400;
const QUALITY   = 88;

// Recorre recursivamente buscando JPEGs
function findJpegs(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findJpegs(full));
    } else if (/\.jpe?g$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const files = findJpegs(BASE);
console.log(`Optimizando ${files.length} fotos en viajes/optimized\n`);

let totalIn = 0, totalOut = 0, done = 0;

(async () => {
  for (const filePath of files) {
    const sizeIn = fs.statSync(filePath).size;
    totalIn += sizeIn;

    const tmp = filePath + '.tmp';
    await sharp(filePath)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(tmp);

    fs.renameSync(tmp, filePath);

    const sizeOut = fs.statSync(filePath).size;
    totalOut += sizeOut;
    done++;
    const pct = ((1 - sizeOut / sizeIn) * 100).toFixed(0);
    const rel = path.relative(BASE, filePath);
    console.log(`[${done}/${files.length}] ${rel}  ${(sizeIn/1024/1024).toFixed(1)}MB -> ${(sizeOut/1024).toFixed(0)}KB  (-${pct}%)`);
  }

  console.log(`\nTotal: ${(totalIn/1024/1024).toFixed(0)}MB -> ${(totalOut/1024/1024).toFixed(0)}MB  (-${((1 - totalOut/totalIn)*100).toFixed(0)}%)`);
})();
