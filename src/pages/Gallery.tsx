import { ArtGrid } from "../components/ArtGrid";
import { artPieces } from "../data/artPieces";

export const Gallery = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      <ArtGrid artPieces={artPieces} />
    </div>
  );
};
