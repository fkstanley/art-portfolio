import { Container } from "@mantine/core";
import { GalleryCarousel } from "../components/GalleryCarousel";

export const Gallery = () => {
  return (
    <Container size="lg" py="xl">
      <GalleryCarousel />
    </Container>
  );
};
