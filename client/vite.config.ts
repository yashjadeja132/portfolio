import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project site under /portfolio/ in production.
  // Dev stays at the root ("/").
  base: command === "build" ? "/portfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    // Dev-only: forward /api to the deployed API so the contact form works
    // without CORS locally. Production uses VITE_API_URL (absolute) instead.
    proxy: {
      "/api": {
        target: "https://portfolio-api-sq70.onrender.com",
        changeOrigin: true,
      },
    },
  },
}));
