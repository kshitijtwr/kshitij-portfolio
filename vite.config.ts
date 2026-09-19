import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/kshitij-portfolio/", // Required for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
