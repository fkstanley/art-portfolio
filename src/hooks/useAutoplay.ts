import { useRef, useEffect, useState } from "react";
import { Embla } from "@mantine/carousel";

export const useAutoplay = (
  emblaApi: Embla | null,
  direction: "forward" | "backward",
  delay: number = 6000,
): { onMouseEnter: () => void; onMouseLeave: () => void } => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      if (emblaApi) {
        if (direction === "forward") {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollPrev();
        }
      }
    }, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, direction, emblaApi, delay]);

  return {
    onMouseEnter: () => setAutoplay(false),
    onMouseLeave: () => setAutoplay(true),
  };
};
