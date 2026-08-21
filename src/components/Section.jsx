import React from "react";
import {useReveal} from "../hooks/useReveal";
import "./Section.css";

/**
 * Every section shares one frame: a hairline rule, a mono eyebrow carrying a real
 * datum about the content, the title, and an optional lede.
 */
export default function Section({id, eyebrow, title, lede, aside, children}) {
  const revealHead = useReveal(0);

  return (
    <section className="section" id={id}>
      <div className="shell">
        <header className="section__head" ref={revealHead}>
          <div className="section__label">
            <span className="mono section__eyebrow">{eyebrow}</span>
            <span className="section__rule" aria-hidden="true" />
          </div>
          <div className="section__intro">
            <h2 className="section__title">{title}</h2>
            {lede && <p className="lede section__lede">{lede}</p>}
          </div>
          {aside && <div className="section__aside">{aside}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}
