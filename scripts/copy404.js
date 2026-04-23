// Post-build: create 404.html for GitHub Pages SPA routing.
import { copyFile, constants } from 'fs';
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

