import { ArtGrid } from "../components/ArtGrid";
import { artPieces } from "../data/artPieces";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <div className={styles.page}>
      <ArtGrid artPieces={artPieces} />
    </div>
  );
};
