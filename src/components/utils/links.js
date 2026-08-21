import { Link } from "react-router-dom";

import "./style.scss";

export const HeaderLink = ({ onClick, to, text }) => {
  return (
    <Link className="link header-link" onClick={onClick} to={to}>
      {text}
    </Link>
  );
};
