import React, {useEffect, useState} from "react";
import Section from "../components/Section";
import {writing} from "../data/profile";
import {useReveal} from "../hooks/useReveal";
import "./Writing.css";

const decode = html =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const monthYear = iso =>
  new Date(iso.replace(" ", "T")).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric"
  });

function Post({post}) {
  return (
    <li className="post stagger-item">
      <a
        className="post__link"
        href={post.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="mono post__date">{monthYear(post.pubDate)}</p>
        <h3 className="post__title">{decode(post.title)}</h3>
        <p className="post__excerpt">
          {decode(post.description).slice(0, 190)}…
        </p>
        <span className="link post__cta">
          <span>Read</span>
          <span>↗</span>
        </span>
      </a>
    </li>
  );
}

export default function Writing() {
  const [posts, setPosts] = useState([]);
  const gridRef = useReveal(0);

  useEffect(() => {
    let live = true;
    fetch(writing.feedUrl)
      .then(r => r.json())
      .then(d => live && setPosts((d.items || []).slice(0, 4)))
      // ponytail: feed is a build artefact — if it's missing, the Medium link still covers it
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  if (!posts.length) return null;

  return (
    <Section
      id="writing"
      eyebrow={writing.eyebrow}
      title={writing.title}
      lede={writing.lede}
      aside={
        <a
          className="link"
          href={writing.profileUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>All posts on Medium</span>
          <span>↗</span>
        </a>
      }
    >
      <ul className="posts" ref={gridRef}>
        {posts.map(post => (
          <Post post={post} key={post.guid} />
        ))}
      </ul>
    </Section>
  );
}
