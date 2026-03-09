import { Modal } from "@mantine/core";
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
      fullScreen
      padding={0}
      withCloseButton={false}
      classNames={{
        content: styles.content,
        body: styles.body,
      }}
      transitionProps={{ transition: "fade", duration: 300 }}
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close"
      >
        <IconX size={20} stroke={1.5} />
      </button>
      <div className={styles.imageContainer}>
        <img
          src={artPiece.image.large}
          alt={artPiece.title}
          className={styles.image}
        />
      </div>
      <div className={styles.titleBar}>
        <span className={styles.title}>{artPiece.title}</span>
      </div>
    </Modal>
  );
};
