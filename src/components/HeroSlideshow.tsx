import { useState, useEffect, useCallback, useRef } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { ArtPiece } from "../data/artPieces";
import classes from "./HeroSlideshow.module.css";

interface HeroSlideshowProps {
  artPieces: ArtPiece[];
  interval?: number;
}

const TRANSITION_MS = 1400;

type Direction = "forward" | "backward";

export const HeroSlideshow = ({
  artPieces,
  interval = 5000,
}: HeroSlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>("forward");
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  const goToSlide = useCallback(
    (target: number, forceDirection?: Direction) => {
      if (isTransitioning.current) return;

      const len = artPieces.length;
      const wrapped = ((target % len) + len) % len;
      if (wrapped === activeIndex) return;

      const dir =
        forceDirection ?? (wrapped > activeIndex ? "forward" : "backward");

      isTransitioning.current = true;

      const commitTransition = () => {
        setExitingIndex(activeIndex);
        setActiveIndex(wrapped);
        setTimeout(() => {
          setExitingIndex(null);
          isTransitioning.current = false;
        }, TRANSITION_MS);
      };

      if (dir !== direction) {
        // Direction is changing — set it first so inactive slides snap to
        // their new parking positions, then wait two frames before starting
        // the transition so the browser has painted the new positions.
        setDirection(dir);
        requestAnimationFrame(() => {
          requestAnimationFrame(commitTransition);
        });
      } else {
        commitTransition();
      }
    },
    [artPieces.length, activeIndex, direction],
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(
      () => goToSlide(activeIndex + 1, "forward"),
      interval,
    );
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, goToSlide, interval]);

  // Scroll wheel navigation
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning.current) return;

      if (e.deltaY > 0) {
        goToSlide(activeIndex + 1, "forward");
      } else if (e.deltaY < 0) {
        goToSlide(activeIndex - 1, "backward");
      }
    };

    hero.addEventListener("wheel", onWheel, { passive: false });
    return () => hero.removeEventListener("wheel", onWheel);
  }, [activeIndex, goToSlide]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    hero.style.setProperty("--parallax-x", `${x * 14}px`);
    hero.style.setProperty("--parallax-y", `${y * 10}px`);
  };

  const handleMouseLeave = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--parallax-x", "0px");
    hero.style.setProperty("--parallax-y", "0px");
    setIsPaused(false);
  };

  return (
    <div
      ref={heroRef}
      className={classes.hero}
      data-direction={direction}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      {artPieces.map((piece, i) => (
        <div
          key={piece.title}
          className={classes.slide}
          data-active={i === activeIndex || undefined}
          data-exiting={i === exitingIndex || undefined}
        >
          <div className={classes.imageWrapper}>
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
        </div>
      ))}

      <div className={classes.info}>
        <span className={classes.counter} key={`c-${activeIndex}`}>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(artPieces.length).padStart(2, "0")}
        </span>
      </div>

      <div className={classes.indicators}>
        <button
          className={classes.arrow}
          onClick={() => goToSlide(activeIndex - 1, "backward")}
          aria-label="Previous slide"
        >
          <IconChevronUp size={16} stroke={1.5} />
        </button>
        {artPieces.map((_, i) => (
          <button
            key={i}
            className={classes.dot}
            data-active={i === activeIndex || undefined}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          className={classes.arrow}
          onClick={() => goToSlide(activeIndex + 1, "forward")}
          aria-label="Next slide"
        >
          <IconChevronDown size={16} stroke={1.5} />
        </button>
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
