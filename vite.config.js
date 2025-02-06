import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // This specifies that the build output should go into 'dist' folder
    emptyOutDir: true, // Ensures the 'dist' folder is cleared before each build
  },
  plugins: [sveltekit()],
});
