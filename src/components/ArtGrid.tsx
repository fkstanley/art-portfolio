import { Box } from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import { ImageModal } from "./ImageModal";
import { ArtPiece } from "../data/artPieces";
import classes from "./ArtGrid.module.css";

interface ArtGridProps {
  artPieces: ArtPiece[];
}

export const ArtGrid = ({ artPieces }: ArtGridProps) => {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    grid.querySelectorAll(`.${classes.item}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      <ImageModal
        opened={!!selectedPiece}
        onClose={() => setSelectedPiece(null)}
        artPiece={selectedPiece}
      />
      <div ref={gridRef} className={classes.masonry}>
        {artPieces.map((piece, i) => (
          <div
            key={piece.title}
            className={classes.item}
            style={{ animationDelay: `${(i % 3) * 120}ms` }}
            onClick={() => setSelectedPiece(piece)}
          >
            <div className={classes.imageWrapper}>
              <img
                src={piece.image.medium}
                alt={piece.title}
                loading="lazy"
                className={classes.image}
              />
              <div className={classes.overlay}>
                <span className={classes.pieceTitle}>{piece.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};
