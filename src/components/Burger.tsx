import classes from "./Burger.module.css";

interface BurgerProps {
  opened: boolean;
  onClick: () => void;
  className?: string;
}

export const Burger = ({ opened, onClick, className }: BurgerProps) => {
  return (
    <button
      className={`${classes.burger} ${className ?? ""}`}
      onClick={onClick}
      aria-label={opened ? "Close navigation" : "Open navigation"}
      data-opened={opened || undefined}
    >
      <span className={classes.line} />
      <span className={classes.line} />
      <span className={classes.line} />
    </button>
  );
};
