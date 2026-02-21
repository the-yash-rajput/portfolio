import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  if (!blog.url) {
    return null;
  }

  return (
    <a
      className={`blog-container ${isDark ? "dark-mode" : ""}`}
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read ${blog.title}`}
    >
      <div className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}>
        <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>{blog.title}</h3>
        <p className={isDark ? "small-dark small" : "small"}>{blog.description}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </a>
  );
}
