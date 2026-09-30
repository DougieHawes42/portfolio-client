import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

import "./style.scss";

import { HeaderLink } from "../utils/links.js";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className="navbar navbar-wide">
        <HeaderLink to="/work" text="work" />
        <HeaderLink to="/skills" text="skills" />
        <HeaderLink to="/contact" text="contact" />
        <HeaderLink to="/blog" text="blog" />
      </nav>
      <nav
        className={`navbar navbar-narrow ${showLinks && "navbar-narrow-border"}`}>
        <div
          className="navbar-narrow-toggle"
          onClick={() => setShowLinks(!showLinks)}>
          {!showLinks ? <TiThMenu /> : <FaTimes />}
        </div>
        {showLinks && (
          <div className="navbar-narrow-links">
            <HeaderLink
              onClick={() => setShowLinks(false)}
              to="/work"
              text="work"
            />
            <HeaderLink
              onClick={() => setShowLinks(false)}
              to="/skills"
              text="skills"
            />
            <HeaderLink
              onClick={() => setShowLinks(false)}
              to="/contact"
              text="contact"
            />
            <HeaderLink
              onClick={() => setShowLinks(false)}
              to="/blog"
              text="blog"
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
