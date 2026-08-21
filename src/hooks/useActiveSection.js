import {useEffect, useState} from "react";

/** Returns the id of the section currently closest to the top of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const seen = new Map();
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => seen.set(e.target.id, e.intersectionRatio));
        const best = ids
          .map(id => [id, seen.get(id) || 0])
          .reduce((a, b) => (b[1] > a[1] ? b : a));
        if (best[1] > 0) setActive(best[0]);
      },
      {threshold: [0, 0.25, 0.5, 0.75]}
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);

  return active;
}
