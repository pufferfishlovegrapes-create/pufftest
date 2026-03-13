const esbuild = require("esbuild");

console.log("Starting build...");

esbuild.build({
  entryPoints: ["scripts/main.js"],
  bundle: true,
  outfile: "game.js",
  format: "iife",
  platform: "browser",
  loader: {
    ".css": "text",
    ".json": "json",
    ".png": "file",
    ".jpg": "file"
  }
})
.then(() => {
  console.log("Build finished!");
})
.catch((e) => {
  console.error("Build error:", e);
});