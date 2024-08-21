import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        arcus: resolve(__dirname, "src/index.js"),
      },
      formats: ["cjs", "es"],
    },
    outDir: "dist",
  },
});
