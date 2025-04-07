import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import "@mantine/carousel/styles.css";
import { artPieces } from "../data/artPieces";
import classes from "./GalleryCarousel.module.css";
import Autoplay from "embla-carousel-autoplay";
export const GalleryCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      slideSize="50%"
      slideGap="md"
      ref={carouselRef}
      withIndicators
      height={600}
      loop
      align="center"
      skipSnaps
      inViewThreshold={0.7}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{
        indicator: classes.indicator,
        root: classes.root,
        controls: classes.controls,
      }}
    >
      {artPieces.map((piece, index) => (
        <Carousel.Slide key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <img
              src={piece.image.medium}
              srcSet={`
                ${piece.image.small} 400w,
                ${piece.image.medium} 800w,
                ${piece.image.large} 1200w
              `}
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
              alt={piece.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
