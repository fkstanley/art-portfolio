import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, mkdirSync, rmSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, "../src/assets/art/png");
const outputBaseDir = join(__dirname, "../src/assets/art/webp");

const FILENAME_PATTERN =
  /^\d{2}-[A-Za-z][A-Za-z0-9]*(-[A-Za-z][A-Za-z0-9]*)*\.png$/;

const sizes = [
  { width: 400, dir: "small" },
  { width: 800, dir: "medium" },
  { width: 1200, dir: "large" },
];

// Clean previous output to prevent stale files
if (existsSync(outputBaseDir)) {
  rmSync(outputBaseDir, { recursive: true });
}

for (const size of sizes) {
  mkdirSync(join(outputBaseDir, size.dir), { recursive: true });
}

const files = readdirSync(inputDir).filter((file) => file.endsWith(".png"));

// Validate filenames
const invalid = files.filter((file) => !FILENAME_PATTERN.test(file));
if (invalid.length > 0) {
  console.error(
    "PNGs must match NN-Title-Words.png (e.g. 01-Venus.png). Invalid files:",
  );
  for (const file of invalid) {
    console.error(`  ${file}`);
  }
  process.exit(1);
}

async function convertToWebP() {
  for (const file of files) {
    const inputPath = join(inputDir, file);
    const baseName = file.replace(".png", "");

    const metadata = await sharp(inputPath).metadata();
    if (!metadata.width || !metadata.height) {
      console.error(`Could not get dimensions for ${file}`);
      process.exit(1);
    }

    for (const size of sizes) {
      const outputPath = join(outputBaseDir, size.dir, `${baseName}.webp`);

      await sharp(inputPath)
        .resize(size.width, null, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`${file} → ${size.dir}/${baseName}.webp (${size.width}px)`);
    }
  }
}

convertToWebP().catch((error) => {
  console.error("Image conversion failed:", error);
  process.exit(1);
});
