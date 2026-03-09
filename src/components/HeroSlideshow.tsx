import { useState, useEffect, useCallback } from "react";
import { ArtPiece } from "../data/artPieces";
import classes from "./HeroSlideshow.module.css";

interface HeroSlideshowProps {
  artPieces: ArtPiece[];
  interval?: number;
}

export const HeroSlideshow = ({
  artPieces,
  interval = 5000,
}: HeroSlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % artPieces.length);
  }, [artPieces.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [isPaused, advance, interval]);

  return (
    <div
      className={classes.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {artPieces.map((piece, i) => (
        <div
          key={piece.title}
          className={classes.slide}
          data-active={i === activeIndex || undefined}
        >
          <img
            src={piece.image.large}
            srcSet={`
              ${piece.image.small} 400w,
              ${piece.image.medium} 800w,
              ${piece.image.large} 1200w
            `}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
            alt={piece.title}
            className={classes.image}
          />
        </div>
      ))}

      <div className={classes.info}>
        <span className={classes.title}>{artPieces[activeIndex].title}</span>
        <span className={classes.counter}>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(artPieces.length).padStart(2, "0")}
        </span>
      </div>

      <div className={classes.indicators}>
        {artPieces.map((_, i) => (
          <button
            key={i}
            className={classes.dot}
            data-active={i === activeIndex || undefined}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={classes.progressBar}>
        <div
          className={classes.progressFill}
          key={`${activeIndex}-${isPaused}`}
          style={{
            animationDuration: `${interval}ms`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        />
      </div>
    </div>
  );
};
