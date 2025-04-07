import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, mkdirSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, "../src/assets/art/png");
const outputDir = join(__dirname, "../src/assets/art/webp");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const files = readdirSync(inputDir).filter((file) => file.endsWith(".png"));

async function convertToWebP() {
  for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file.replace(".png", ".webp"));

    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      console.log(`Converted ${file} to WebP`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}

convertToWebP();
