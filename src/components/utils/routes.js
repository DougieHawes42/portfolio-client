import { motion } from "motion/react";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

export const PublicRoute = ({ title, content }) => (
  <div className="route">
    <motion.h2
      className="route-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}>
      {title}
    </motion.h2>
    <div className="route-content">{content}</div>
  </div>
);

export const PublicItemRoute = ({ title, content }) => (
  <div className="route item">
    <motion.h2
      className="route-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}>
      {title}
    </motion.h2>
    <div className="route-content">{content}</div>
  </div>
);

export const AuthRoute = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    };

    validateToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
