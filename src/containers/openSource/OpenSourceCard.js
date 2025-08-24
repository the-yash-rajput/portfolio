import React from "react";
import "./OpenSourceCard.scss";

export default function OpenSourceCard({ contribution, isDark }) {
  const {
    name,
    description,
    role,
    contribution: contributionText,
    technologies,
    status,
    url,
    achievements
  } = contribution;

  const handleCardClick = () => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className={`opensource-container ${isDark ? "opensource-card-shadow" : ""}`}>
      <div 
        className="opensource-card"
        onClick={handleCardClick}
        style={{ cursor: url && url !== "#" ? "pointer" : "default" }}
      >
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        
        <div className="project-header">
          <h3 className={`opensource-title ${isDark ? "small-dark" : ""}`}>
            {name}
            {status && (
              <span className="status-badge">{status}</span>
            )}
          </h3>
          {role && (
            <p className={`small role-text ${isDark ? "small-dark" : ""}`}>
              {role}
            </p>
          )}
        </div>

        <p className={`small description-text ${isDark ? "small-dark" : ""}`}>
          {description}
        </p>
        
        {contributionText && (
          <div className="contribution-section">
            <p className={`small contribution-text ${isDark ? "small-dark" : ""}`}>
              <strong>Key Contribution:</strong> {contributionText}
            </p>
          </div>
        )}

        {achievements && achievements.length > 0 && (
          <div className="achievements-section">
            <p className={`small achievements-text ${isDark ? "small-dark" : ""}`}>
              <strong>Achievements:</strong> {achievements.join(" • ")}
            </p>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="technologies-section">
            <p className={`small tech-text ${isDark ? "small-dark" : ""}`}>
              <strong>Technologies:</strong> {technologies.join(" • ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}