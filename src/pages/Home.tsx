import "@mantine/core/styles.css";
import { Container, Grid, Image } from "@mantine/core";
import { artPieces } from "../data/artPieces";

export const Home = () => {
  return (
    <Container my="md">
      <Grid>
        {artPieces.map((piece, index) => (
          <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
            <Image
              src={piece.image}
              alt={piece.title}
              radius="md"
              style={{ cursor: "pointer" }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
