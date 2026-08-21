import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Focus from "./sections/Focus";
import Impact from "./sections/Impact";
import Experience from "./sections/Experience";
import Stack from "./sections/Stack";
import OpenSource from "./sections/OpenSource";
import Writing from "./sections/Writing";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import {useTheme} from "./hooks/useTheme";
import "./styles/base.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a className="skip" href="#focus">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <Focus />
        <Impact />
        <Experience />
        <Stack />
        <OpenSource />
        <Writing />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
