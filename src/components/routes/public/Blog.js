import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { BlogCard } from "../../utils/cards.js";

const Blog = () => {
  const [blog, setBlog] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/blog`,
      );

      setBlog(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  const content = (
    <>
      {blog &&
        blog.map(({ _id, title, subtitle, createdAt, text, tags, images }) => (
          <BlogCard
            key={_id}
            id={_id}
            title={title}
            subtitle={subtitle}
            date={new Date(createdAt).toLocaleDateString()}
            text={text}
            tags={tags.map((t) => (
              <div key={t}>#{t}, </div>
            ))}
            images={`${images?.[0]}`}
          />
        ))}
    </>
  );

  return <PublicRoute content={content} title="blog" />;
};

export default Blog;
