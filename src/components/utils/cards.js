import { CardLink } from "./links.js";

import "./style.scss";

export const WorkCard = ({ image, title, category, id, description }) => (
  <div className="card work-card">
    <div className="work-card-image-container">
      <img className="work-card-image" src={image} alt={title} />
    </div>
    <div className="work-card-text">
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-category">{category}</p>
      <p className="work-card-description">{description}</p>
      <CardLink to={`/work/${id}`} text="details" />
    </div>
  </div>
);

export const BlogCard = ({ title, subtitle, date, image, text, onClick }) => (
  <div className="card blog-card"></div>
);
