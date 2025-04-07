import { Grid, Image } from "@mantine/core";
import { artPieces } from "../data/artPieces";

export const ArtGrid = () => {
  return (
    <Grid>
      {artPieces.map((piece, index) => (
        <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
          <Image
            src={piece.image.medium}
            srcSet={`
              ${piece.image.small} 400w,
              ${piece.image.medium} 800w,
              ${piece.image.large} 1200w
            `}
            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
            alt={piece.title}
            radius="md"
            style={{ cursor: "pointer" }}
            loading="lazy"
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
