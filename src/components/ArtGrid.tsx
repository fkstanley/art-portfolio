import { Grid, Image, Box } from "@mantine/core";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { ArtPiece } from "../data/artPieces";
import classes from "./ArtGrid.module.css";

interface ArtGridProps {
  artPieces: ArtPiece[];
}

export const ArtGrid = ({ artPieces }: ArtGridProps) => {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);

  return (
    <Box>
      <ImageModal
        opened={!!selectedPiece}
        onClose={() => setSelectedPiece(null)}
        artPiece={selectedPiece}
      />
      <Grid>
        {artPieces.map((piece) => (
          <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={piece.title}>
            <Image
              src={piece.image.medium}
              alt={piece.title}
              radius="md"
              loading="lazy"
              className={classes.clickable}
              onClick={() => setSelectedPiece(piece)}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
