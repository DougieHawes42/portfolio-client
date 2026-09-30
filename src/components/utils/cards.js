import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { CardLink } from "./links.js";

import "./style.scss";

export const WorkCard = ({ category, image, title, id, description }) => (
  // use motion to zoom in on render using size
  <motion.div
    className="card work-card"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}>
    <div className="work-card-image-container">
      <img className="work-card-image" src={image} alt={title} />
    </div>
    <div className="work-card-text">
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-description">{description}</p>
      <CardLink to={`/work/${id}`} text="see more" />
    </div>
  </motion.div>
);

export const SkillCard = ({ onClick, name, logo, level }) => (
  <motion.div
    className="card skill-card"
    onClick={onClick}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      ease: "easeOut",
    }}>
    <div className="skill-card-logo-container">{logo}</div>
    <div className="skill-card-text">
      <h3 className="skill-card-name">{name}</h3>
      <p className="skill-card-level">{level}</p>
    </div>
  </motion.div>
);

export const BlogCard = ({ id, title, subtitle, date, images, text, tags }) => (
  <motion.div
    className="card blog-card"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}>
    <Link to={`/blog/${id}`}>
      <div className="blog-card-image-container">
        <img className="blog-card-image" src={images} alt={title} />
      </div>
      <div className="blog-card-text">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-subtitle">{subtitle}</p>
        <div className="blog-card-tags">{tags}</div>
        <p className="blog-card-date">{date}</p>
      </div>
      <div
        className="blog-card-body"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Link>
  </motion.div>
);
