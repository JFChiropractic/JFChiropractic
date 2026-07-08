// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages setup — pick the pair that matches where you host:
//
// 1. This repo (JFChiropractic/JFChiropractic):
//      site: "https://jfchiropractic.github.io", base: "/JFChiropractic"
//    → site lives at https://jfchiropractic.github.io/JFChiropractic/
//
// 2. A repo named jfchiropractic.github.io (recommended — cleaner URL):
//      site: "https://jfchiropractic.github.io", no base
//    → site lives at https://jfchiropractic.github.io/
//
// 3. A custom domain later: set site to that domain, remove base.
export default defineConfig({
  site: "https://jfchiropractic.github.io",
  base: "/JFChiropractic",
  vite: {
    plugins: [tailwindcss()],
  },
});
