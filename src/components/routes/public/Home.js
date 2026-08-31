import axios from "axios";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

import "./style.scss";

import { IconLink } from "../../utils/links.js";
import { PublicRoute } from "../../utils/routes.js";
import { WorkCard } from "../../utils/cards.js";

import { work } from "../../../data.js";

const Home = () => {
  // const [workItems, setWorkItems] = useState("");

  // const getResult = async () => {
  //   try {
  //     const result = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/api/work`,
  //     );

  //     // setMessage(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getResult();

  const content = (
    <div className="home">
      <div className="home-work-examples-container">
        <WorkCard
          title={work[1].title}
          image={work[1].image}
          category={work[1].category}
          description={work[1].description}
          id={work[1].id}
        />
        <WorkCard
          image={work[2].image}
          title={work[2].title}
          category={work[2].category}
          description={work[2].description}
          id={work[2].id}
        />
        <WorkCard
          image={work[3].image}
          title={work[3].title}
          category={work[3].category}
          description={work[3].description}
          id={work[3].id}
        />
      </div>
      <div className="home-sigil">
        <div className="home-links-box">
          <IconLink to="https://github.com/DougieHawes42" icon={<FaGithub />} />
          <IconLink
            to="https://www.linkedin.com/in/dougie-hawes/"
            icon={<FaLinkedin />}
          />
        </div>
        <div className="home-mern-icons">
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
        </div>
        <div className="home-title-box">
          <h1 className="home-title">
            Doug<span id="home-title-surname">Hawes</span>
          </h1>
          <p className="home-subtitle">FullStack Web Developer</p>
        </div>
      </div>
    </div>
  );

  return <PublicRoute content={content} />;
};

export default Home;
