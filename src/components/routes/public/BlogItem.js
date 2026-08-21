import axios from "axios";

import { useState } from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";

const BlogItem = () => {
  const params = useParams();

  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/blog/${params.id}`,
      );

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <PublicRoute content={content} title={`blog-item ${params.id}`} />;
};

export default BlogItem;
