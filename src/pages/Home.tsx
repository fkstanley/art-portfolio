import "@mantine/core/styles.css";
import { Container } from "@mantine/core";
import { ArtGrid } from "../components/ArtGrid";

export const Home = () => {
  return (
    <Container my="md">
      <ArtGrid />
    </Container>
  );
};
