import { defineConfig } from "vite";

/** Set `VITE_BASE=/website/` (trailing slash) when deploying to https://<user>.github.io/website/ */
const base = process.env.VITE_BASE?.trim() || "./";

export default defineConfig({
  base,
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
