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

function piece(title: string, filename: string): ArtPiece {
  return {
    title,
    image: {
      small: resolve("small", filename),
      medium: resolve("medium", filename),
      large: resolve("large", filename),
    },
  };
}

export const artPieces: ArtPiece[] = [
  piece("Venus", "Venus"),
  piece("Ecstasy of St Theresa", "Ecstasy of St Theresa "),
  piece("Sergei Polunin", "Sergei Polunin"),
  piece("Ear", "ear"),
  piece("Pulp Fiction", "Pulp Fiction"),
  piece("Geometric Face", "Geometric-Face"),
  piece("Eye Bruised", "Eye-Bruised"),
  piece("Icarus", "icarus"),
  piece("Geometric Hand", "Geometric-Hand"),
  piece("Liquified Eye", "liquified-eye"),
  piece("Donnie Darko", "Donnie Darko"),
  piece("Dirty Dancing", "Dirty-Dancing"),
  piece("Blind Spots", "Blind Spots"),
  piece("Aquaria", "Aquaria"),
  piece("Sam Morris", "Sam Morris"),
];
