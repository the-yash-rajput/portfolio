import React, {useEffect, useRef, useState} from "react";

/** "₹1 Cr" → ["₹", "1", " Cr"] · "98.95" → ["", "98.95", ""] · "1st" → ["", "1", "st"] */
const PARTS = /^(\D*)([\d.]+)(.*)$/;

/** Below this the count is over before you read it — "0st" flashing to "1st"
 *  looks broken rather than animated, so those values just reveal. */
const MIN_TO_COUNT = 10;

const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts a figure up when it first scrolls into view. The prefix and suffix
 * are held static so "₹" and "%" never animate — only the number does.
 */
export default function Counter({value, duration = 1200}) {
  const ref = useRef(null);
  const match = String(value).match(PARTS);
  const target = match ? parseFloat(match[2]) : NaN;
  const decimals = match && match[2].includes(".")
    ? match[2].split(".")[1].length
    : 0;
  const animatable = match && !Number.isNaN(target) && target >= MIN_TO_COUNT;

  const [shown, setShown] = useState(animatable ? 0 : target);

  useEffect(() => {
    if (!animatable) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(target);
      return undefined;
    }

    let raf;
    let start = null;
    const run = now => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      setShown(target * easeOutExpo(t));
      if (t < 1) raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        raf = requestAnimationFrame(run);
      },
      {threshold: 0.4}
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animatable, target, duration]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref} className="counter">
      {match[1]}
      <span className="counter__num">{shown.toFixed(decimals)}</span>
      {match[3]}
    </span>
  );
}
