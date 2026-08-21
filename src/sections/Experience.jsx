import React from "react";
import Section from "../components/Section";
import {experience} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Experience.css";

function Job({job, index}) {
  const ref = useReveal(index * 110);
  return (
    <article className="job" ref={ref}>
      <div className="job__rail" aria-hidden="true">
        <span className="job__node" />
      </div>

      <div className="job__body">
        <p className="mono job__period">{job.period}</p>
        <h3 className="job__role">{job.role}</h3>
        <p className="job__org">
          {job.logo && (
            <img src={job.logo} alt="" className="job__logo" loading="lazy" />
          )}
          {job.org}
        </p>
        <p className="job__summary">{job.summary}</p>
        <ul className="job__bullets">
          {job.bullets.map(b => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow={experience.eyebrow}
      title={experience.title}
    >
      <div className="jobs">
        {experience.jobs.map((job, i) => (
          <Job job={job} index={i} key={`${job.org}-${job.period}`} />
        ))}
      </div>
    </Section>
  );
}
