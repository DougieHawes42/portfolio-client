import "./style.scss";

import LoadingImage from "../../assets/media/loading-image.svg";

const Loader = () => (
  <div className="loader-container">
    <img className="loader-animation" src={LoadingImage} alt="" />
    <p className="loader-text">Loading...</p>
  </div>
);

export default Loader;
