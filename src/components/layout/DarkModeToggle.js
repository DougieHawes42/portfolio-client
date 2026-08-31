import "./style.scss";

const DarkModeToggle = ({ onClick, icon }) => (
  <div className="dark-mode-toggle" onClick={onClick}>
    {icon}
  </div>
);

export default DarkModeToggle;
