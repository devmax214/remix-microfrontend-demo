import { federation } from "@module-federation/vite";
import { defineConfig } from 'vite';
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remix(), 
    federation({
      filename: "remoteEntry.js",
      name: "remote",
      exposes: {
        "./remote-widget1": "./app/components/Widget1.tsx",
      },
      remotes: {},
    }),
    tsconfigPaths()
  ],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': '/app',
    },
  },
});
