import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentDateShort = new Date().toLocaleString("default", {
    month: "short",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        <span className="header__date header__date--full">{currentDate}</span>
        <span className="header__date header__date--short">
          {currentDateShort}
        </span>
        <span className="header__city">
          {weatherData?.city || "Loading..."}
        </span>
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        <button className="header__add-clothes-btn" onClick={onAddClick}>
          + Add Clothes
        </button>
      </div>
      <Link to="/profile" className="header__user-link">
        <div className="header__user-container">
          <p className="header__user-name">Adam Ewell</p>
          <img src={avatar} alt="Avatar" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
