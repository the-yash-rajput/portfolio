import {useCallback} from "react";

// One shared observer for every revealing element on the page.
let observer = null;

function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-reveal", "in");
        observer.unobserve(entry.target);
      });
    },
    {rootMargin: "0px 0px -12% 0px", threshold: 0.08}
  );
  return observer;
}

/**
 * Ref callback that fades + lifts an element the first time it scrolls in.
 * @param {number} delay stagger in ms
 */
export function useReveal(delay = 0) {
  return useCallback(
    node => {
      if (!node) return;
      node.setAttribute("data-reveal", "");
      node.style.setProperty("--reveal-delay", `${delay}ms`);
      const io = getObserver();
      // ponytail: no IO (old Safari, jsdom) → show it immediately rather than hide content
      if (!io) node.setAttribute("data-reveal", "in");
      else io.observe(node);
    },
    [delay]
  );
}
