import { defineConfig } from "tsup";

export default defineConfig({
    name: "scratch-render-fonts",
    target: ["esnext"],
    format: ["cjs", "esm", "iife"],
    entry: ["src/GraphemeBreaker.js"],
    outDir: "dist",
    platform: "browser",
    clean: true,
    minify: process.env.NODE_ENV === "production",
    loader: {
        ".trie": "base64"
    }
});
