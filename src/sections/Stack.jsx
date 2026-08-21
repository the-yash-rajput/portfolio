import React from "react";
import Section from "../components/Section";
import {stack} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Stack.css";

function Group({group, index}) {
  const ref = useReveal(index * 90);
  return (
    <div className="sgroup" ref={ref}>
      <h3 className="mono sgroup__name">{group.name}</h3>
      <ul className="sgroup__items">
        {group.items.map(item => (
          <li className="chip" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Stack() {
  return (
    <Section id="stack" eyebrow={stack.eyebrow} title={stack.title}>
      <div className="sgrid">
        {stack.groups.map((group, i) => (
          <Group group={group} index={i} key={group.name} />
        ))}
      </div>
    </Section>
  );
}
