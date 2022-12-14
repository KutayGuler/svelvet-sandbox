import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [{ find: "$lib", replacement: "/src/lib" }],
  },
});
