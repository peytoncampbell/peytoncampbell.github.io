// Pre-build: clean generated Vite assets while preserving hand-authored docs.
import { rm } from 'fs/promises';
import { resolve } from 'path';

const generatedPaths = [
  resolve('docs', 'assets'),
  resolve('docs', 'index.html'),
  resolve('docs', '404.html'),
];

for (const target of generatedPaths) {
  await rm(target, { recursive: true, force: true });
}
