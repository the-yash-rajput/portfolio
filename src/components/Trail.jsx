import React, {useEffect, useRef} from "react";
import "./Trail.css";

// ponytail: pure-CSS lag — the dots all chase the same --x/--y, each with a
// longer transition than the last, so the trail falls out of the stagger for
// free. No rAF loop, no per-dot state, nothing on React's critical path.
const DOTS = 9;

export default function Trail() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const skip = window.matchMedia(
      "(hover: none), (prefers-reduced-motion: reduce)"
    );
    if (skip.matches) return undefined;

    let frame = 0;
    const onMove = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${event.clientX}px`);
        el.style.setProperty("--y", `${event.clientY}px`);
        el.dataset.on = "";
      });
    };

    window.addEventListener("pointermove", onMove, {passive: true});
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="trail" ref={ref} aria-hidden="true">
      {Array.from({length: DOTS}, (_, i) => (
        <span key={i} className="trail__dot" style={{"--i": i}} />
      ))}
    </div>
  );
}
