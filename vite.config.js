// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // <<< match this with your repo name
  plugins: [react()],
});
