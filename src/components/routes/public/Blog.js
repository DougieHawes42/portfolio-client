import axios from "axios";

import { useState } from "react";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";

const Blog = () => {
  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/blog");

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <PublicRoute content={content} title="blog" />;
};

export default Blog;
