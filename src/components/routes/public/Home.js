import axios from "axios";

import { useState } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";

const Home = () => {
  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/home`,
      );

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <PublicRoute content={content} title="home" />;
};

export default Home;
