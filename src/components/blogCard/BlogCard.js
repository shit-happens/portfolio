import React from "react";
import "./BlogCard.scss";
import Reveal from "../reveal/Reveal";

export default function BlogCard({blog, index = 0}) {
  return (
    <Reveal as="li" className="post" delay={index * 80}>
      <a
        className="post__link"
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="post__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="post__body">
          <span className="post__title">{blog.title}</span>
          <span className="post__desc">{blog.description}</span>
        </span>
        <span className="post__arrow" aria-hidden="true">
          <i className="fas fa-arrow-right" />
        </span>
      </a>
    </Reveal>
  );
}
