import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Account-level GitHub Pages site: assets are served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
