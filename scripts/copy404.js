// Post-build: create 404.html + restore static-dash → docs/dash/
import { copyFile, constants, cpSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

// 1. SPA 404 fallback
const src = resolve('docs', 'index.html');
const dest = resolve('docs', '404.html');

copyFile(src, dest, constants.COPYFILE_FICLONE, (err) => {
  if (err) {
    console.error('Failed to create 404.html from index.html:', err);
    process.exit(1);
  } else {
    console.log('Created docs/404.html for GitHub Pages routing.');
  }
});

// 2. Restore dashboard (vite wipes docs/ on build)
const dashSrc = resolve('static-dash');
const dashDest = resolve('docs', 'dash');
if (existsSync(dashSrc)) {
  mkdirSync(dashDest, { recursive: true });
  cpSync(dashSrc, dashDest, { recursive: true });
  console.log('Restored docs/dash/ from static-dash/.');
}
