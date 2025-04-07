import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, mkdirSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, "../src/assets/art/png");
const outputBaseDir = join(__dirname, "../src/assets/art/webp");

const sizes = [
  { width: 400, suffix: "small", dir: "small" },
  { width: 800, suffix: "medium", dir: "medium" },
  { width: 1200, suffix: "large", dir: "large" },
];

for (const size of sizes) {
  const outputDir = join(outputBaseDir, size.dir);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
}

const files = readdirSync(inputDir).filter((file) => file.endsWith(".png"));

async function convertToWebP() {
  for (const file of files) {
    const inputPath = join(inputDir, file);
    const baseName = file.replace(".png", "");

    // Maintain aspect ratio
    const metadata = await sharp(inputPath).metadata();
    if (!metadata.width || !metadata.height) {
      console.error(`Could not get dimensions for ${file}`);
      continue;
    }

    for (const size of sizes) {
      const outputDir = join(outputBaseDir, size.dir);
      const outputPath = join(outputDir, `${baseName}.webp`);

      try {
        await sharp(inputPath)
          .resize(size.width, null, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: 80 }) // 80% quality, should be hard for an eye to tell the difference
          .toFile(outputPath);

        console.log(
          `Converted ${file} to ${size.suffix} WebP (${size.width}px) in ${size.dir} directory`,
        );
      } catch (error) {
        console.error(`Error converting ${file} to ${size.suffix}:`, error);
      }
    }
  }
}

convertToWebP();
