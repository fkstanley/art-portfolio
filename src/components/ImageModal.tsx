import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import { ArtPiece } from "../data/artPieces";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  opened: boolean;
  onClose: () => void;
  artPiece: ArtPiece | null;
}

export const ImageModal = ({ opened, onClose, artPiece }: ImageModalProps) => {
  useEffect(() => {
    if (!opened) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [opened, onClose]);

  if (!opened || !artPiece) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <button
        className={styles.closeButton}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        <IconX size={20} stroke={1.5} />
      </button>
      <div className={styles.imageContainer}>
        <img
          src={artPiece.image.large}
          alt={artPiece.title}
          className={styles.image}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div className={styles.titleBar} onClick={(e) => e.stopPropagation()}>
        <span className={styles.title}>{artPiece.title}</span>
      </div>
    </div>,
    document.body,
  );
};
