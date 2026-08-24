import React, {useRef} from "react";
import AgentGraph from "../components/AgentGraph";
import {useSpotlight} from "../hooks/useSpotlight";
import {hero, person} from "../data/profile";
import "./Hero.css";

export default function Hero({theme}) {
  const ref = useRef(null);
  // the moiré's parallax rides the same delegated pointer listener the cards use
  useSpotlight(ref, ".hero");

  return (
    <section className="hero" id="top" ref={ref}>
      {/* Two sheets of drafting film, ruled at slightly different pitches and
          turning against each other. Where the rulings nearly agree they
          interfere, and the interference — not any of the lines — is the
          image. No canvas, no WebGL: three gradients and a transform. */}
      <div className="moire" aria-hidden="true">
        <span className="moire__sheet moire__sheet--a" />
        <span className="moire__sheet moire__sheet--b" />
        <span className="moire__drift">
          <span className="moire__rings" />
        </span>
      </div>
      <div className="shell hero__inner">
        <p className="mono hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__headline">
          {hero.headline.map((line, i) => (
            <span className="hero__line" key={line}>
              {line.split(" ").map((word, j) => (
                <span
                  className="hero__word"
                  key={`${word}-${j}`}
                  style={{"--d": `${0.12 + (i * 4 + j) * 0.055}s`}}
                >
                  <span>{word}</span>
                </span>
              ))}
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
