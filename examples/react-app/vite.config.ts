import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const currentDir = path
  .dirname(new URL(import.meta.url).pathname)
  .replace(/^\/(?=[A-Za-z]:\/)/, "");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Specify directories to be included in the allow list
      allow: [
        // Allow serving files from the root (this is usually the default)
        ".",
        // Add the path to your external modules or web components
        // Adjust the path as necessary to point to the correct location
        path.resolve(currentDir, "../../salla-web-component-challenge"),
      ],
    },
  },
});
