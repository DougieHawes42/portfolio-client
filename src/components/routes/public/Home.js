import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

import "./style.scss";

import Loader from "../../layout/Loader.js";

import { IconLink } from "../../utils/links.js";
import { PublicRoute } from "../../utils/routes.js";
import { WorkCard } from "../../utils/cards.js";

import { work } from "../../../data.js";

const Home = () => {
  const [workItems, setWorkItems] = useState([]);
  const [randomApp, setRandomApp] = useState(null);
  const [randomSite, setRandomSite] = useState(null);
  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/work`,
        );

        const apps = result.data.filter((item) => item.category === "App");

        const random = getRandomItem(apps);

        setWorkItems(result.data);
        setRandomApp(random);
      } catch (error) {
        console.error(error);
      }
    };

    getResult();
  }, []);

  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const content = (
    <div className="home">
      <motion.div
        className="home-sigil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}>
        <div className="home-mern-icons">
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
        </div>
        <motion.h1
          className="home-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}>
          Doug<span id="home-title-surname">Hawes</span>
        </motion.h1>
      </motion.div>
      {workItems ? (
        <div className="home-work-examples-container">
          <div className="home-work-examples">
            <div className="home-work-example">
              <h4 className="home-work-example-title">Apps</h4>
              {randomApp && (
                <WorkCard
                  title={randomApp.title}
                  image={randomApp.images[0]}
                  category={randomApp.category}
                  description={randomApp.description}
                  id={randomApp._id}
                />
              )}
            </div>
            <div className="home-work-example">
              <h4 className="home-work-example-title">Sites</h4>
              {randomApp && (
                <WorkCard
                  title={randomApp.title}
                  image={randomApp.images[0]}
                  category={randomApp.category}
                  description={randomApp.description}
                  id={randomApp._id}
                />
              )}
            </div>
            <div className="home-work-example">
              <h4 className="home-work-example-title">Games</h4>
              {randomApp && (
                <WorkCard
                  title={randomApp.title}
                  image={randomApp.images[0]}
                  category={randomApp.category}
                  description={randomApp.description}
                  id={randomApp._id}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );

  return <PublicRoute content={content} />;
};

export default Home;
