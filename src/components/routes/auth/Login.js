import axios from "axios";

import { useState } from "react";

import "./style.scss";

import { AuthRoute } from "../../utils/routes.js";

const Login = () => {
  const [message, setMessage] = useState("");

  const getResult = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/auth");

      setMessage(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  getResult();

  const content = <>{message}</>;

  return <AuthRoute content={content} title="login" />;
};

export default Login;
