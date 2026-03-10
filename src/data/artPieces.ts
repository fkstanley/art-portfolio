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

// Display order — reorder by moving lines, add new pieces anywhere
const order = [
  "Life-Portrait-Shoko",
  "Curled-Up-Figure-Painting",
  "Venus",
  "Self-Portrait",
  "Ecstasy-of-St-Theresa",
  "Sergei-Polunin",
  "Monochrome-Portrait",
  "Ear",
  "Pulp-Fiction",
  "Geometric-Face",
  "Eye-Bruised",
  "Icarus",
  "Geometric-Hand",
  "Liquified-Eye",
  "Donnie-Darko",
  "Dirty-Dancing",
  "Blind-Spots",
  "Aquaria",
  "Sam-Morris",
  "Palette-Knife-Painting",
];

export const artPieces: ArtPiece[] = order.map((slug) => ({
  title: slug.split("-").join(" "),
  image: {
    small: resolve("small", slug),
    medium: resolve("medium", slug),
    large: resolve("large", slug),
  },
}));
