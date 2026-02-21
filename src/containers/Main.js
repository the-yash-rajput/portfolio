import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import Projects from "./projects/Projects";
import {homepageSections, splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import OpenSourceContributions from "./openSource/OpenSourec";

import "./Main.scss";

const sectionComponentMap = {
  greeting: Greeting,
  skills: Skills,
  proficiency: StackProgress,
  experience: WorkExperience,
  projects: Projects,
  opensource: OpenSourceContributions,
  education: Education,
  achievements: Achievement,
  blogs: Blogs,
  contact: Profile
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const sectionsToRender = homepageSections
    .filter(
      section => section.visible !== false && sectionComponentMap[section.id]
    )
    .map(section => {
      const SectionComponent = sectionComponentMap[section.id];
      return <SectionComponent key={section.id} />;
    });

  return (
    <div className={isDark ? "dark-mode app-root" : "app-root"}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main className="site-main">{sectionsToRender}</main>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
