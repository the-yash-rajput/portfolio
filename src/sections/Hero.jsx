import React from "react";
import AgentGraph from "../components/AgentGraph";
import {hero, person} from "../data/profile";
import "./Hero.css";

export default function Hero({theme}) {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <p className="mono hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__headline">
          {hero.headline.map((line, i) => (
            <span className="hero__line" key={line} style={{"--i": i}}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero__meta">
          <p className="lede hero__lede">{hero.lede}</p>

          <div className="hero__side">
            {person.available && (
              <p className="mono hero__status">
                <span className="hero__pip" />
                {hero.status}
              </p>
            )}
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={person.resume}
                target="_blank"
                rel="noreferrer"
              >
                Résumé <span className="btn__arrow">↗</span>
              </a>
              <a className="btn" href="#contact">
                Get in touch <span className="btn__arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__graph">
          <AgentGraph theme={theme} />
        </div>
      </div>
    </section>
  );
}
