import {useEffect} from "react";

/**
 * Tracks the pointer across a grid and writes its position onto whichever
 * card it is over, as --mx / --my. The wash itself is drawn in CSS.
 *
 * One delegated listener for the whole grid rather than one per card, and
 * writing custom properties instead of re-rendering keeps it off React's
 * critical path entirely.
 */
export function useSpotlight(ref, cardSelector) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const onMove = event => {
      if (!(event.target instanceof Element)) return;
      const card = event.target.closest(cardSelector);
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    };

    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, [ref, cardSelector]);
}
