import React from "react";
import Section from "../components/Section";
import {achievements, education} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Awards.css";

function Award({card}) {
  return (
    <article className="award stagger-item">
      <picture className="award__badge">
        <source srcSet={card.image} type="image/webp" />
        <img src={card.fallback} alt={card.alt} loading="lazy" />
      </picture>
      <h3 className="award__title">{card.title}</h3>
      <p className="award__body">{card.body}</p>
      {card.link && (
        <a
          className="link award__link"
          href={card.link.url}
          target="_blank"
          rel="noreferrer"
        >
          <span>{card.link.label}</span>
          <span>↗</span>
        </a>
      )}
    </article>
  );
}

export default function Awards() {
  const gridRef = useReveal(0);
  const eduRef = useReveal(120);

  return (
    <Section
      id="awards"
      eyebrow={achievements.eyebrow}
      title={achievements.title}
    >
      <div className="awards" ref={gridRef}>
        {achievements.cards.map(card => (
          <Award card={card} key={card.title} />
        ))}
      </div>

      <div className="edu" ref={eduRef}>
        <span className="mono edu__label">{education.eyebrow}</span>
        {education.schools.map(school => (
          <div className="edu__row" key={school.name}>
            <img
              src={school.logo}
              alt=""
              className="edu__logo"
              loading="lazy"
            />
            <div>
              <p className="edu__name">{school.name}</p>
              <p className="mono edu__degree">
                {school.degree} · {school.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
