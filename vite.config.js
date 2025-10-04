import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // <-- add this

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/andrea-portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- add this
    },
  },
});
