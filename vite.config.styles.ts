import { fileURLToPath, URL } from "node:url"
import { resolve } from "node:path"
import { defineConfig } from "vite"

// Separate build config ONLY for CSS - processes main.css through Tailwind
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: false, // Don't delete the JS build from previous step
    lib: {
      entry: resolve(__dirname, "src/styles-entry.ts"),
      name: "EducStyles",
      fileName: () => "styles-temp.js", // Temporary file, will be deleted after build
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "component-library.css",
      },
    },
    cssCodeSplit: false,
  },
  css: {
    postcss: "./postcss.config.mjs",
  },
})
