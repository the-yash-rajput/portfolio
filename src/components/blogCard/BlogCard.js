import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  if (!blog.url) {
    return null;
  }

  const hasImage = typeof blog.image === "string" && blog.image.trim().length > 0;
  const badgeText = blog.title
    ? blog.title
        .split(" ")
        .slice(0, 2)
        .join(" ")
        .toUpperCase()
    : "BLOG";

  return (
    <a
      className={`blog-container ${isDark ? "dark-mode" : ""}`}
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read ${blog.title}`}
    >
      <div className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}>
        <div className={`blog-media ${hasImage ? "has-image" : "no-image"}`}>
          {hasImage ? (
            <img src={blog.image} alt={blog.title} loading="lazy" />
          ) : (
            <div className="blog-media-fallback">{badgeText}</div>
          )}
        </div>
        <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>{blog.title}</h3>
        <p className={isDark ? "small-dark small" : "small"}>{blog.description}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </a>
  );
}
