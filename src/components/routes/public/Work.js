import axios from "axios";

import { useState } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";

const Work = () => {
  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/work");

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <PublicRoute content={content} title="work" />;
};

export default Work;
