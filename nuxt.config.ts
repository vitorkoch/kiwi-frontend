import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@vueuse/motion/nuxt",
    "nuxt-lucide-icons",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "./src",
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
  },
  css: ["@styles/main.css"],
  components: {
    dirs: ["@/components"],
  },
});