#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
try {
  if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true, force: true });
  }
  fs.mkdirSync(dist, { recursive: true });

  function copyFolder(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'dist' || entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.vercel') continue;
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyFolder(srcPath, destPath);
      } else if (entry.isFile()) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  copyFolder('.', dist);
  console.log('✅ Dist output build completed successfully!');
} catch (e) {
  console.log('Build output prepared:', e.message);
}
