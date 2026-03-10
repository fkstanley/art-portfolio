const images = import.meta.glob<{ default: string }>(
  "../assets/art/webp/**/*.webp",
  { eager: true },
);

function resolve(size: string, filename: string): string {
  const key = `../assets/art/webp/${size}/${filename}.webp`;
  const mod = images[key];
  if (!mod) throw new Error(`Missing image: ${key}`);
  return mod.default;
}

export interface ArtPiece {
  title: string;
  image: {
    small: string;
    medium: string;
    large: string;
  };
}

// Derive pieces automatically from the small/ directory glob keys
const filenamePattern = /\/small\/(\d{2})-(.+)\.webp$/;

export const artPieces: ArtPiece[] = Object.keys(images)
  .map((key) => filenamePattern.exec(key))
  .filter((match): match is RegExpExecArray => match !== null)
  .map(([, order, slug]) => ({
    order: parseInt(order, 10),
    slug: `${order}-${slug}`,
    title: slug.split("-").join(" "),
  }))
  .sort((a, b) => a.order - b.order)
  .map(({ title, slug }) => ({
    title,
    image: {
      small: resolve("small", slug),
      medium: resolve("medium", slug),
      large: resolve("large", slug),
    },
  }));
