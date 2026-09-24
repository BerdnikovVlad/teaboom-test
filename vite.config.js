import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@scripts": path.resolve(__dirname, "./src/assets/scripts"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
      },
    },
  },
  server: {
    open: "/index.html",
  },
});
