import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': '/app',
    },
  },
});
