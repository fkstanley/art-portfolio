import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import "@mantine/carousel/styles.css";
import { artPieces } from "../data/artPieces";

export const GalleryCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <Carousel ref={carouselRef} withIndicators height={600} loop>
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
              src={piece.image}
              alt={piece.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
