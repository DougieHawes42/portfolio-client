import "./style.scss";

export const PublicRoute = ({ title, content }) => (
  <div className="route">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);

export const AuthRoute = ({ title, content }) => (
  <div className="route">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);

export const PrivateRoute = ({ title, content }) => (
  <div className="route">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);
