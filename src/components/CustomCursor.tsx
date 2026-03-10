import { useEffect, useRef } from "react";
import classes from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      dot.dataset.visible = "";
      ring.dataset.visible = "";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"]')) {
        dot.dataset.hovering = "";
        ring.dataset.hovering = "";
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"]')) {
        delete dot.dataset.hovering;
        delete ring.dataset.hovering;
      }
    };

    const hide = () => {
      delete dot.dataset.visible;
      delete ring.dataset.visible;
    };
    const show = () => {
      dot.dataset.visible = "";
      ring.dataset.visible = "";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={classes.dot} />
      <div ref={ringRef} className={classes.ring} />
    </>
  );
};
