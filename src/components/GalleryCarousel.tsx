import { Carousel, Embla } from "@mantine/carousel";
import { useRef } from "react";
import "@mantine/carousel/styles.css";
import { ArtPiece } from "../data/artPieces";
import { useAutoplay } from "../hooks/useAutoplay";
import classes from "./GalleryCarousel.module.css";

interface GalleryCarouselProps {
  artPieces: ArtPiece[];
  direction?: "forward" | "backward";
}

export const GalleryCarousel = ({
  artPieces,
  direction = "forward",
}: GalleryCarouselProps) => {
  const carouselRef = useRef<Embla | null>(null);
  const { onMouseEnter, onMouseLeave } = useAutoplay(
    carouselRef.current,
    direction,
  );

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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      classNames={{
        indicator: classes.indicator,
        root: classes.root,
        controls: classes.controls,
      }}
    >
      {artPieces.map((piece) => (
        <Carousel.Slide key={piece.title}>
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
