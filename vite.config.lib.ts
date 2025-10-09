import { fileURLToPath, URL } from "node:url"
import { resolve } from "node:path"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// Library build config - includes full CSS processing
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "EducComponentLibrary",
      fileName: (format) => `educ-component-library.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@headlessui/vue",
        "@vueuse/core",
        "lucide-vue-next",
        "reka-ui",
        "vue-sonner",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "component-library.css"
          return assetInfo.name || ""
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: false, // Don't empty since we run multiple builds
  },
  // Force CSS processing through PostCSS (includes Tailwind)
  css: {
    postcss: "./postcss.config.mjs",
  },
})
