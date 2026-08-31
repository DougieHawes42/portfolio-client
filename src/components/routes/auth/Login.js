import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

import { AuthRoute } from "../../utils/routes.js";

const Login = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user`,
      );

      setMessage(response);
    };

    getMessage();
  }, []);

  const content = <>{message}</>;

  return <AuthRoute content={content} title="login" />;
};

export default Login;
