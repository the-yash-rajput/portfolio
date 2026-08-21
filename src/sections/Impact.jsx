import React from "react";
import Section from "../components/Section";
import {impact} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Impact.css";

function Row({row, index}) {
  const ref = useReveal(index * 80);
  return (
    <li className="ledger__row" ref={ref}>
      <span className="ledger__value">{row.value}</span>
      <span className="mono ledger__unit">{row.unit}</span>
      <span className="ledger__what">{row.what}</span>
      <span className="mono ledger__where">{row.where}</span>
    </li>
  );
}

export default function Impact() {
  return (
    <Section id="impact" eyebrow={impact.eyebrow} title={impact.title}>
      <ul className="ledger">
        {impact.rows.map((row, i) => (
          <Row row={row} index={i} key={row.value + row.where} />
        ))}
      </ul>
    </Section>
  );
}
