import axios from "axios";

import { useState } from "react";

import "./style.scss";

import { PrivateRoute } from "../../utils/routes.js";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/profile`,
      );

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <PrivateRoute content={content} title="dashboard" />;
};

export default Dashboard;
