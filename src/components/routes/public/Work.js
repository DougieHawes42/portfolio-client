import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { WorkCard } from "../../utils/cards.js";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const getWork = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/work`,
        );

        setWork(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getWork();
  }, []);

  console.log(work);
  const content = (
    <div className="work">
      <div className="work-grid">
        {work.map(({ _id, images, title, category, description }) => (
          <WorkCard
            key={_id}
            id={_id}
            image={`${process.env.REACT_APP_API_URL}/uploads/${images[0]}`}
            title={title}
            category={category}
            description={description}
          />
        ))}
      </div>
    </div>
  );

  return <PublicRoute content={content} title="work" />;
};

export default Work;
