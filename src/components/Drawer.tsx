import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import classes from "./Drawer.module.css";

interface DrawerProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer = ({ opened, onClose, children }: DrawerProps) => {
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

  if (!opened) return null;

  return createPortal(
    <div className={classes.root}>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.panel}>
        <button className={classes.close} onClick={onClose} aria-label="Close">
          <IconX size={20} stroke={1.5} />
        </button>
        <div className={classes.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
