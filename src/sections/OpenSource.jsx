import React from "react";
import Section from "../components/Section";
import {openSource} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./OpenSource.css";

function Pr({pr, index}) {
  const ref = useReveal(index * 55);
  return (
    <li className="pr" ref={ref}>
      <a className="pr__link" href={pr.url} target="_blank" rel="noreferrer">
        <span className="pr__status mono" data-status={pr.status}>
          {pr.status}
        </span>
        <span className="pr__title">{pr.title}</span>
        <span className="mono pr__repo">{pr.repo}</span>
        <span className="mono pr__num">#{pr.number}</span>
      </a>
    </li>
  );
}

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow={openSource.eyebrow}
      title={openSource.title}
      lede={openSource.lede}
    >
      <ul className="prs">
        {openSource.prs.map((pr, i) => (
          <Pr pr={pr} index={i} key={pr.url} />
        ))}
      </ul>
    </Section>
  );
}
