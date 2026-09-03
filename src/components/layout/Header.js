import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./style.scss";

import Navbar from "./Navbar.js";

import { IconLink } from "../utils/links.js";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}>
      <div className="header-left">
        <Link to="/">
          <div className="header-title-container">
            <h1 className="header-title">
              Doug<span id="header-title-surname">Hawes</span>
            </h1>
            <p className="header-subtitle">Fullstack Web Developer</p>
          </div>
        </Link>
        <div className="header-icon-links">
          <IconLink to="https://github.com/DougieHawes42" icon={<FaGithub />} />
          <IconLink
            to="https://www.linkedin.com/in/dougie-hawes/"
            icon={<FaLinkedin />}
          />
        </div>
      </div>
      <Navbar />
    </motion.header>
  );
};

export default Header;
