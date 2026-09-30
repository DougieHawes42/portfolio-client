import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { SubmitButton } from "../../utils/buttons.js";
import { TextInput } from "../../utils/inputs.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/signin`,
        formData,
      );

      if (!response.data.token) {
        return;
      }

      localStorage.setItem("token", response.data.token);

      navigate(`${process.env.REACT_APP_PRIVATE_ROUTE}/dashboard`);
    } catch (error) {
      console.error(error);
    }
  };

  const content = (
    <>
      <TextInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <TextInput
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <SubmitButton onClick={handleSubmit} label="Login" />
    </>
  );

  return <PublicRoute content={content} title="login" />;
};

export default Login;
