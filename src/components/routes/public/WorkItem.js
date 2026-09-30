import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./style.scss";

import { PublicItemRoute } from "../../utils/routes.js";

const WorkItem = () => {
  const [workItem, setWorkItem] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    const getResult = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/work/${params.id}`,
        );

        setWorkItem(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getResult();
  }, []);

  const content = (
    <motion.div
      className="work-item"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}>
      <div className="work-item-columns">
        <div className="work-item-column">
          <div className="work-item-image-container">
            <img
              className="work-item-image"
              src={`${workItem.images && workItem.images[imageIndex]}`}
              alt=""
            />
            <div className="work-image-toggle">
              <div
                className="work-image-toggle-left"
                onClick={() =>
                  setImageIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : workItem.images.length - 1,
                  )
                }>
                <FaChevronLeft />
              </div>
              <div
                className="work-image-toggle-right"
                onClick={() =>
                  setImageIndex((prevIndex) =>
                    prevIndex < workItem.images.length - 1 ? prevIndex + 1 : 0,
                  )
                }>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className="work-item-column">
          <p className="work-item-category">{workItem.category}</p>
          <div className="work-item-tags-container">
            {workItem.tags &&
              workItem.tags.map((t) => <div key={t}>#{t}, </div>)}
          </div>
          <p className="work-item-description">{workItem.description}</p>
        </div>
      </div>
      <div className="work-item-links-container">
        <a
          className="work-item-link"
          href={workItem.gitHubClientLink}
          target="blank">
          client
        </a>
        {workItem.gitHubServerLink && (
          <a
            className="work-item-link"
            href={workItem.gitHubServerLink}
            target="blank">
            server
          </a>
        )}
        <a
          className="work-item-link site"
          href={workItem.siteLink}
          target="blank">
          view
        </a>
      </div>
    </motion.div>
  );

  return (
    workItem && <PublicItemRoute content={content} title={workItem.title} />
  );
};

export default WorkItem;
