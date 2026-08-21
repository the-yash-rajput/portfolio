import React from "react";
import {person} from "../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="mono footer__note">
          {person.name} · {person.location}
        </p>
        <p className="mono footer__note">React · Canvas 2D · no UI framework</p>
        <a className="mono footer__top" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
