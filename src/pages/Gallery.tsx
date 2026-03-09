import { Container } from "@mantine/core";
import { ArtGrid } from "../components/ArtGrid";
import { artPieces } from "../data/artPieces";

export const Gallery = () => {
  return (
    <Container my="md">
      <ArtGrid artPieces={artPieces} />
    </Container>
  );
};
