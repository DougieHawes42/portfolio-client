import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./style.scss";

import Navbar from "./Navbar.js";

import { IconLink } from "../utils/links.js";

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
