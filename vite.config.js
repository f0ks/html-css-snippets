import { defineConfig } from 'vite';
import { readdirSync, statSync, existsSync } from 'fs';
import { resolve } from 'path';

const root = resolve(__dirname);

// Auto-discover all snippet folders containing index.html
const input = { main: resolve(root, 'index.html') };

for (const entry of readdirSync(root)) {
  const dir = resolve(root, entry);
  if (statSync(dir).isDirectory() && existsSync(resolve(dir, 'index.html'))) {
    input[entry] = resolve(dir, 'index.html');
  }
}

export default defineConfig({
  root,
  build: {
    rollupOptions: { input },
  },
});
