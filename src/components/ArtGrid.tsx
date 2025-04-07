import { Grid, Image, Box } from "@mantine/core";
import { artPieces } from "../data/artPieces";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { ArtPiece } from "../data/artPieces";

export const ArtGrid = () => {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);

  return (
    <Box>
      <ImageModal
        opened={!!selectedPiece}
        onClose={() => setSelectedPiece(null)}
        artPiece={selectedPiece}
      />
      <Grid>
        {artPieces.map((piece, index) => (
          <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
            <Image
              src={piece.image.medium}
              alt={piece.title}
              radius="md"
              loading="lazy"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedPiece(piece)}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
