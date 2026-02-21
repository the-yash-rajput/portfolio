import React, {useState, useEffect, useContext, useRef} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragStateRef = useRef({
    isPointerDown: false,
    startX: 0,
    scrollLeft: 0,
    hasDragged: false
  });

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  function extractImageFromHtml(html) {
    if (typeof html !== "string") {
      return "";
    }
    const imageSourceMatch = html.match(
      /<img[^>]+src=["']([^"']+)["'][^>]*>/i
    );
    return imageSourceMatch?.[1] || "";
  }
  
  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);

  const scrollBlogs = direction => {
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
      setIsDragging(true);
      dragStateRef.current.hasDragged = true;
    }
    if (dragStateRef.current.hasDragged) {
      slider.scrollLeft = dragStateRef.current.scrollLeft - walk;
    }
  };

  const handlePointerUp = event => {
    dragStateRef.current.isPointerDown = false;
    dragStateRef.current.hasDragged = false;
    window.setTimeout(() => setIsDragging(false), 0);
  };

  const blogsToShow =
    blogSection.displayMediumBlogs !== "true" || mediumBlogs === "Error"
      ? blogSection.blogs.map((blog, i) => ({
          id: `local-${i}`,
          url: blog.url,
          title: blog.title,
          description: blog.description,
          image: blog.image || ""
        }))
      : mediumBlogs.map((blog, i) => ({
          id: `medium-${i}`,
          url: blog.link || blog.guid || "",
          title: blog.title,
          description: extractTextContent(blog.content),
          image:
            blog.thumbnail ||
            blog.enclosure?.link ||
            extractImageFromHtml(blog.content)
        }));

  if (!blogSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>

        <div className="blog-main-div">
          <div className="blog-slider-controls">
            <button
              type="button"
              className="blog-slider-btn"
              onClick={() => scrollBlogs(-1)}
              aria-label="Slide blogs left"
            >
              ←
            </button>
            <button
              type="button"
              className="blog-slider-btn"
              onClick={() => scrollBlogs(1)}
              aria-label="Slide blogs right"
            >
              →
            </button>
          </div>

          <div
            ref={sliderRef}
            className={`blog-text-div ${isDragging ? "is-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {blogsToShow.map(blog => (
              <BlogCard key={blog.id} isDark={isDark} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
