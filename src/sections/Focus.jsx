import React from "react";
import Section from "../components/Section";
import {focus} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Focus.css";

function Card({card}) {
  return (
    <article className="fcard stagger-item">
      <span className="fcard__trace" aria-hidden="true" />
      <h3 className="fcard__title">{card.title}</h3>
      <p className="fcard__body">{card.body}</p>
      <ul className="fcard__stack">
        {card.stack.map(s => (
          <li className="chip" key={s}>
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Focus() {
  const ref = useReveal(0);
  return (
    <Section
      id="focus"
      eyebrow={focus.eyebrow}
      title={focus.title}
      lede={focus.lede}
    >
      <div className="fgrid" ref={ref}>
        {focus.cards.map(card => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </Section>
  );
}
