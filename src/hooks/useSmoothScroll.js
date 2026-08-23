import {useEffect} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Matches scroll-padding-top in base.css — the sticky nav's clearance. */
const NAV_OFFSET = 96;

/**
 * Smooth scrolling via Lenis, plus anchor handling to match.
 *
 * Lenis interpolates the real scrollTop, so sticky positioning, the nav's
 * scroll-driven progress bar and every IntersectionObserver reveal keep
 * working untouched. It is skipped entirely under prefers-reduced-motion,
 * where base.css already falls back to instant jumps.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      // slight ease-out; the tail is what reads as weight rather than drift
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    let raf;
    const frame = time => {
      lenis.raf(time);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    /* Native anchor jumps bypass Lenis, so route them through it instead.
       Handled here rather than in Nav so the brand link, the skip link and
       any future in-page link all behave the same. */
    const onClick = event => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      // a throw here would kill every click on the page, so check the target
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href").slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      // "#top" has no element — the browser treats it as the document start
      if (!target && id !== "top") return;

      event.preventDefault();
      lenis.scrollTo(target || 0, {
        offset: target ? -NAV_OFFSET : 0,
        onComplete: () => {
          if (target) {
            // keyboard users must land on the section, not back at the nav
            target.setAttribute("tabindex", "-1");
            target.focus({preventScroll: true});
          }
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
