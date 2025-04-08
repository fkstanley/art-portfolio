import "@mantine/core/styles.css";
import { Container, Stack } from "@mantine/core";
import { GalleryCarousel } from "../components/GalleryCarousel";
import { artPieces } from "../data/artPieces";

export const Home = () => {
  const midpoint = Math.floor(artPieces.length / 2);
  const firstHalf = artPieces.slice(0, midpoint);
  const secondHalf = artPieces.slice(midpoint);

  return (
    <Container size="lg">
      <Stack>
        <GalleryCarousel direction="backward" artPieces={firstHalf} />
        <GalleryCarousel direction="forward" artPieces={secondHalf} />
      </Stack>
    </Container>
  );
};
