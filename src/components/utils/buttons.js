import "./style.scss";

export const SubmitButton = ({ label, onClick }) => (
  <button className="submit-button" onClick={onClick}>
    {label}
  </button>
);
