import React, {useContext, useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, homepageSections} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoInitials = greeting.username
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join("");

  const navSections = homepageSections.filter(
    section => section.showInNav !== false && section.visible !== false
  );
  const handleMenuToggle = event => {
    setIsMenuOpen(event.target.checked);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
    };
  }, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo" aria-label="Home" onClick={closeMenu}>
          <span className="logo-mark">{logoInitials || "YR"}</span>
          <span className="logo-content">
            <span className="logo-name">{greeting.username}</span>
          </span>
        </a>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label className="menu-icon" htmlFor="menu-btn" aria-label="Toggle menu">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navSections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={closeMenu}>
                {section.label}
              </a>
            </li>
          ))}
          <li className="theme-toggle-item" onClick={closeMenu}>
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
