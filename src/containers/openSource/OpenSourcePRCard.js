import React from "react";
import "./OpenSourceCard.scss";

export default function OpenSourcePRCard({ prInfo, isDark }) {
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

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'merged':
        return '#28a745';
      case 'open':
        return '#007bff';
      case 'closed':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className={`opensource-container ${isDark ? "opensource-card-shadow" : ""}`}>
      <div 
        className="opensource-card"
        onClick={handleCardClick}
        style={{ cursor: prUrl ? "pointer" : "default" }}
      >
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        
        <div className="project-header">
          <div className="title-status-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 className={`opensource-title ${isDark ? "small-dark" : ""}`}>
              {title}
            </h3>
            <span className="status-badge" style={{ backgroundColor: getStatusColor(status), margin: 10, borderRadius: 5 }}>{status}</span>
          </div>

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
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
