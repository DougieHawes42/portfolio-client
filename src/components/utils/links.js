import { Link } from "react-router-dom";

import "./style.scss";

export const HeaderLink = ({ onClick, to, text }) => {
  return (
    <Link className="link header-link" onClick={onClick} to={to}>
      {text}
    </Link>
  );
};

export const IconLink = ({ to, icon }) => (
  <a className="link icon-link" href={to} target="blank">
    {icon}
  </a>
);

export const CardLink = ({ to, text }) => (
  <Link className="card-link" to={to}>
    {text}
  </Link>
);
