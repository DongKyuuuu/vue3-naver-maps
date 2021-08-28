import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import analyze from "rollup-plugin-analyzer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(process.cwd(), "playground"),
  hmr: { overlay: false },
  build: {
    outDir: "../playground_dist",
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [vue()],
});
