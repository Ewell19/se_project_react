import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          checked={currentTemperatureUnit === "C"}
          onChange={handleToggleSwitchChange}
        />
        <span className="toggle-switch__text toggle-switch__text_f">F</span>
        <span className="toggle-switch__text toggle-switch__text_c">C</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
