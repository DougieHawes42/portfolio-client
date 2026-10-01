import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./style.scss";

import { PublicItemRoute } from "../../utils/routes.js";

const BlogItem = () => {
  const params = useParams();

  const [blogItem, setBlogItem] = useState();
  const [imageIndex, setImageIndex] = useState(0);

  const getResult = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/blog/${params.id}`,
      );

      setBlogItem(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  const content = (
    <>
      {blogItem && (
        <motion.div
          className="blog-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}>
          <div className="blog-item-header">
            <p className="blog-item-subtitle">{blogItem.subtitle}</p>
            <p className="blog-item-date">
              {new Date(blogItem.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="blog-item-image-container">
            <div className="blog-item-image-wrapper">
              {blogItem.images?.[imageIndex] && (
                <img
                  className="blog-item-image"
                  src={blogItem.images[imageIndex]}
                  alt={blogItem.title}
                />
              )}
            </div>
            <div className="blog-item-image-navigation">
              <FaChevronLeft
                className="blog-item-image-navigation-left"
                onClick={() =>
                  setImageIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : blogItem.images.length - 1,
                  )
                }
              />
              <FaChevronRight
                className="blog-item-image-navigation-right"
                onClick={() =>
                  setImageIndex((prevIndex) =>
                    prevIndex < blogItem.images.length - 1 ? prevIndex + 1 : 0,
                  )
                }
              />
            </div>
          </div>
          <div className="blog-item-tags">
            {blogItem.tags?.map((t) => (
              <span key={t}>#{t}, </span>
            ))}
          </div>
          <div
            className="blog-item-text"
            dangerouslySetInnerHTML={{ __html: blogItem.text }}></div>
        </motion.div>
      )}
    </>
  );

  return <PublicItemRoute content={content} title={`${blogItem?.title}`} />;
};

export default BlogItem;
