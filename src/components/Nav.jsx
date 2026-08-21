import React from "react";
import {navItems, person} from "../data/profile";
import {useActiveSection} from "../hooks/useActiveSection";
import "./Nav.css";

const ids = navItems.map(n => n.id);

export default function Nav({theme, onToggleTheme}) {
  const active = useActiveSection(ids);

  return (
    <header className="nav">
      <div className="nav__progress" aria-hidden="true" />
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__monogram">{person.monogram}</span>
          <span className="nav__name">{person.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mono nav__link"
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__theme"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span className="mono">{theme === "dark" ? "dark" : "light"}</span>
          <span className="nav__swatch" />
        </button>
      </div>
    </header>
  );
}
