import { motion } from "motion/react";

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

export const AuthRoute = ({ title, content }) => (
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

export const PrivateRoute = ({ title, content }) => (
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
