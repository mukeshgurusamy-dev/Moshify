const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
const indexHtmlPath = path.join(distPath, "index.html");

try {
  // Read all files in dist root
  const files = fs.readdirSync(distPath);
  // Find hashed sprite file, e.g. sprite.c4514e85.svg
  const spriteFile = files.find((f) => /^sprite\..+\.svg$/.test(f));

  if (!spriteFile) {
    throw new Error("Hashed sprite file not found in dist!");
  }

  // Copy hashed sprite file to sprite.svg (overwrite)
  fs.copyFileSync(
    path.join(distPath, spriteFile),
    path.join(distPath, "sprite.svg")
  );

  // Read and update index.html references
  let html = fs.readFileSync(indexHtmlPath, "utf8");
  html = html.replace(new RegExp(spriteFile, "g"), "sprite.svg");
  fs.writeFileSync(indexHtmlPath, html);

  console.log("Post-build: sprite.svg copied and index.html updated.");
} catch (err) {
  console.error("Post-build error:", err);
  process.exit(1);
}
