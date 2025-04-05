import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '*.loca.lt',
      'quick-cobras-sniff.loca.lt', // Add the specific host
      'localhost',
    ],
  },
});