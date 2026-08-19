import React, {useState, useEffect} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import {blogSection} from "../../portfolio";

export default function Blogs() {
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  // Medium API returns blog content as HTML. Pull the plain paragraph text out.
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
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

  if (!blogSection.display) {
    return null;
  }

  const useFallback =
    blogSection.displayMediumBlogs !== "true" || mediumBlogs === "Error";

  const posts = useFallback
    ? blogSection.blogs.map(blog => ({
        url: blog.url,
        title: blog.title,
        description: blog.description
      }))
    : mediumBlogs.map(blog => ({
        url: blog.link,
        title: blog.title,
        description: extractTextContent(blog.content)
      }));

  return (
    <div className="band">
      <section className="section blogs" id="blogs">
        <SectionHead
          eyebrow="08 / Writing"
          title={blogSection.title}
          subtitle={blogSection.subtitle}
        />

        <ol className="blog-list">
          {posts.map((blog, i) => (
            <BlogCard key={i} blog={blog} index={i} />
          ))}
        </ol>
      </section>
    </div>
  );
}
