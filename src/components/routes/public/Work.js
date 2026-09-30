import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { WorkCard } from "../../utils/cards.js";

const Work = () => {
  const [work, setWork] = useState([]);

  const [appsSelected, setAppsSelected] = useState(true);
  const [sitesSelected, setSitesSelected] = useState(true);
  const [gamesSelected, setGamesSelected] = useState(true);

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

  const handleSelection = (category) => {
    // convert lower to a switch statement for better readability
    switch (category) {
      case "Apps":
        if (appsSelected && (sitesSelected || gamesSelected)) {
          setSitesSelected(false);
          setGamesSelected(false);
        } else {
          setAppsSelected(true);
        }
        break;
      case "Sites":
        if (sitesSelected && (appsSelected || gamesSelected)) {
          setAppsSelected(false);
          setGamesSelected(false);
        } else {
          setSitesSelected(true);
        }
        break;
      case "Games":
        if (gamesSelected && (appsSelected || sitesSelected)) {
          setAppsSelected(false);
          setSitesSelected(false);
        } else {
          setGamesSelected(true);
        }
        break;
      default:
        break;
    }
  };

  const content = (
    <div className="work">
      <div className="work-grid-selection">
        <div
          className={`work-grid-selection-item ${appsSelected && "selected"}`}
          onClick={() => handleSelection("Apps")}>
          Apps
        </div>
        <div
          className={`work-grid-selection-item ${sitesSelected && "selected"}`}
          onClick={() => handleSelection("Sites")}>
          Sites
        </div>
        <div
          className={`work-grid-selection-item ${gamesSelected && "selected"}`}
          onClick={() => handleSelection("Games")}>
          Games
        </div>
      </div>
      <div className="work-grid">
        {work
          .filter(
            ({ category }) =>
              (category === "App" && appsSelected) ||
              (category === "Site" && sitesSelected) ||
              (category === "Game" && gamesSelected),
          )
          .map(({ _id, images, title, category, description }) => (
            <WorkCard
              key={_id}
              id={_id}
              image={`${images?.[0]}`}
              title={title}
              description={description}
            />
          ))}
      </div>
    </div>
  );

  return <PublicRoute content={content} title="work" />;
};

export default Work;
