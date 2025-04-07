import { Modal, Image } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { ArtPiece } from "../data/artPieces";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  opened: boolean;
  onClose: () => void;
  artPiece: ArtPiece | null;
}

export const ImageModal = ({ opened, onClose, artPiece }: ImageModalProps) => {
  if (!artPiece) return null;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      padding={0}
      size="xl"
      closeButtonProps={{
        icon: <IconX size={20} stroke={1.5} />,
      }}
      classNames={{
        header: styles.header,
      }}
    >
      <Image src={artPiece.image.large} alt={artPiece.title} />
    </Modal>
  );
};
