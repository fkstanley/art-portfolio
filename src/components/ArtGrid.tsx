import { useState, useEffect, useRef, useCallback } from "react";
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

  const handleTiltMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget.querySelector(
      `.${classes.imageWrapper}`,
    ) as HTMLElement | null;
    if (!wrapper) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    wrapper.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  }, []);

  const handleTiltLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget.querySelector(
      `.${classes.imageWrapper}`,
    ) as HTMLElement | null;
    if (wrapper) wrapper.style.transform = "";
  }, []);

  return (
    <>
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
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            <div className={classes.imageWrapper}>
              <img
                src={piece.image.medium}
                alt={piece.title}
                loading="lazy"
                className={classes.image}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
