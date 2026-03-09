import { Container } from "@mantine/core";
import { ArtGrid } from "../components/ArtGrid";
import { artPieces } from "../data/artPieces";

export const Gallery = () => {
  return (
    <Container size="lg" py="xl">
      <ArtGrid artPieces={artPieces} />
    </Container>
  );
};
