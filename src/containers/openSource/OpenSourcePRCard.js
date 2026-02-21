import React from "react";
import "./OpenSourceCard.scss";

export default function OpenSourcePRCard({prInfo, isDark}) {
  const {
    title,
    description,
    repository,
    prNumber,
    prUrl,
    status,
    date,
    technologies,
    impact,
    changes
  } = prInfo;

  const handleCardClick = () => {
    if (prUrl) {
      window.open(prUrl, "_blank");
    }
  };

  const getStatusColor = value => {
    switch (value?.toLowerCase()) {
      case "merged":
        return "#16a34a";
      case "open":
        return "#2563eb";
      case "closed":
        return "#dc2626";
      default:
        return "#64748b";
    }
  };

  return (
    <div className={`opensource-container ${isDark ? "opensource-card-shadow" : ""}`}>
      <div
        className="opensource-card"
        onClick={handleCardClick}
        style={{cursor: prUrl ? "pointer" : "default"}}
      >
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>

        <div className="project-header">
          <div className="title-status-row">
            <h3 className={`opensource-title ${isDark ? "small-dark" : ""}`}>
              {title}
            </h3>
            {status && (
              <span
                className="status-badge"
                style={{backgroundColor: getStatusColor(status)}}
              >
                {status}
              </span>
            )}
          </div>
          {(repository || prNumber) && (
            <p className={`small meta-text ${isDark ? "small-dark" : ""}`}>
              {repository || "Repository"}
              {prNumber ? ` #${prNumber}` : ""}
            </p>
          )}
          {date && (
            <p className={`small date-text ${isDark ? "small-dark" : ""}`}>
              {date}
            </p>
          )}
        </div>

        <p className={`small description-text ${isDark ? "small-dark" : ""}`}>
          {description}
        </p>

        {impact && (
          <div className="impact-section">
            <p className={`small impact-text ${isDark ? "small-dark" : ""}`}>
              <strong>Impact:</strong> {impact}
            </p>
          </div>
        )}

        {changes && changes.length > 0 && (
          <div className="changes-section">
            <p className={`small changes-text ${isDark ? "small-dark" : ""}`}>
              <strong>Key Changes:</strong>
            </p>
            <ul className={`changes-list ${isDark ? "small-dark" : ""}`}>
              {changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="technologies-section">
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
