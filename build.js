import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      if (child === 'dist' || child === '.git' || child === 'node_modules' || child === '.vercel') continue;
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

for (const file of fs.readdirSync('.')) {
  if (file === 'dist' || file === '.git' || file === 'node_modules' || file === '.vercel') continue;
  copyRecursive(file, path.join(dist, file));
}

console.log('✅ Dist output build completed successfully!');
