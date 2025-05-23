import { Carousel, Embla } from "@mantine/carousel";
import { useRef, useEffect, useState } from "react";
import "@mantine/carousel/styles.css";
import { ArtPiece } from "../data/artPieces";
import classes from "./GalleryCarousel.module.css";

interface GalleryCarouselProps {
  artPieces?: ArtPiece[];
  direction?: "forward" | "backward";
}

export const GalleryCarousel = ({
  artPieces,
  direction = "forward",
}: GalleryCarouselProps) => {
  const carouselRef = useRef<Embla | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayDelay = 6000;

  // Autoplay
  useEffect(() => {
    if (!autoplay) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        if (direction === "forward") {
          carouselRef.current.scrollNext();
        } else {
          carouselRef.current.scrollPrev();
        }
      }
    }, autoplayDelay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, direction]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "sm", sm: "md" }}
      getEmblaApi={(api) => {
        carouselRef.current = api;
        return api;
      }}
      withIndicators
      height="100%"
      loop
      align="center"
      skipSnaps
      inViewThreshold={0.7}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      classNames={{
        indicator: classes.indicator,
        root: classes.root,
        controls: classes.controls,
      }}
    >
      {artPieces?.map((piece, index) => (
        <Carousel.Slide key={index}>
          <div className={classes.slideContent}>
            <img
              src={piece.image.medium}
              srcSet={`
                ${piece.image.small} 400w,
                ${piece.image.medium} 800w,
                ${piece.image.large} 1200w
              `}
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
              alt={piece.title}
              className={classes.image}
              loading="lazy"
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
