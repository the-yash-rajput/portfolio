import React, {useContext, useRef, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragStateRef = useRef({
    isPointerDown: false,
    startX: 0,
    scrollLeft: 0,
    hasDragged: false
  });

  const scrollAchievements = direction => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.scrollBy({left: direction * 340, behavior: "smooth"});
  };

  const handlePointerDown = event => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }
    dragStateRef.current = {
      isPointerDown: true,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
      hasDragged: false
    };
    setIsDragging(false);
  };

  const handlePointerMove = event => {
    const slider = sliderRef.current;
    if (!dragStateRef.current.isPointerDown || !slider) {
      return;
    }
    const walk = event.clientX - dragStateRef.current.startX;
    if (Math.abs(walk) > 10) {
      dragStateRef.current.hasDragged = true;
      setIsDragging(true);
    }
    if (dragStateRef.current.hasDragged) {
      slider.scrollLeft = dragStateRef.current.scrollLeft - walk;
    }
  };

  const handlePointerUp = () => {
    dragStateRef.current.isPointerDown = false;
    dragStateRef.current.hasDragged = false;
    window.setTimeout(() => setIsDragging(false), 0);
  };

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-slider-controls">
            <button
              type="button"
              className="achievement-slider-btn"
              onClick={() => scrollAchievements(-1)}
              aria-label="Slide achievements left"
            >
              ←
            </button>
            <button
              type="button"
              className="achievement-slider-btn"
              onClick={() => scrollAchievements(1)}
              aria-label="Slide achievements right"
            >
              →
            </button>
          </div>

          <div
            ref={sliderRef}
            className={`achievement-cards-div ${isDragging ? "is-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <div className="achievement-slide-item" key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      fallbackImage: card.fallbackImage,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
