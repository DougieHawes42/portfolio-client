import { Link } from "react-router-dom";

import "./style.scss";

import Navbar from "./Navbar.js";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-title-container">
          <h1 className="header-title">Doug Hawes</h1>
          <p className="header-subtitle">Fullstack MERN Web Developer</p>
        </div>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
