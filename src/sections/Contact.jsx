import React from "react";
import Section from "../components/Section";
import {contact, person, socials} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal(60);

  return (
    <Section
      id="contact"
      eyebrow={contact.eyebrow}
      title={contact.title}
      lede={contact.lede}
    >
      <div className="contact" ref={ref}>
        <a className="contact__email" href={`mailto:${person.email}`}>
          {person.email}
        </a>

        <div className="contact__grid">
          <div className="contact__col">
            <p className="mono contact__key">Direct</p>
            <a className="contact__val" href={`tel:${person.phone}`}>
              {person.phone}
            </a>
            <a className="contact__val" href={person.resumeDownload}>
              Download résumé
            </a>
          </div>

          <div className="contact__col">
            <p className="mono contact__key">Elsewhere</p>
            {socials.map(s => (
              <a
                className="contact__val"
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
                <span className="contact__handle mono">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
