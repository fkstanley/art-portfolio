import "@mantine/core/styles.css";
import { Container } from "@mantine/core";
import { GalleryCarousel } from "../components/GalleryCarousel";

export const Home = () => {
  return (
    <Container size="lg" py="xl">
      <GalleryCarousel />
    </Container>
  );
};
