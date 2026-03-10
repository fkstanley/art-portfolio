import { useEffect, useRef } from "react";
import { HeroSlideshow } from "../components/HeroSlideshow";
import { ArtGrid } from "../components/ArtGrid";
import { artPieces } from "../data/artPieces";
import styles from "./Home.module.css";

export const Home = () => {
  const transitionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = transitionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSlideshow artPieces={artPieces} interval={6000} />
      <section ref={transitionRef} className={styles.transition}>
        <div className={styles.rule} />
        <h2 className={styles.sectionHeading}>Selected Works</h2>
      </section>
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <ArtGrid artPieces={artPieces} />
        </div>
      </section>
    </>
  );
};
