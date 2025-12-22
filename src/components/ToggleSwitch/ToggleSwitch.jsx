import { useContext, useRef, useState } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const labelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);

    if (labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      const distance = Math.abs(e.clientX - startX);

      // Only handle drag behavior if there was significant movement
      if (distance >= 5) {
        const endX = e.clientX - rect.left;
        const midpoint = rect.width / 2;
        const isCurrentlyC = currentTemperatureUnit === "C";
        const shouldToggle =
          (endX < midpoint && isCurrentlyC) ||
          (endX >= midpoint && !isCurrentlyC);

        if (shouldToggle) {
          handleToggleSwitchChange();
        }
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !labelRef.current) return;

    const rect = labelRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const midpoint = rect.width / 2;

    const isCurrentlyC = currentTemperatureUnit === "C";
    const shouldShowC = currentX >= midpoint;

    if ((shouldShowC && !isCurrentlyC) || (!shouldShowC && isCurrentlyC)) {
      handleToggleSwitchChange();
    }
  };

  const handleCheckboxChange = () => {
    // Only toggle if not dragging (prevents double toggle on drag+click)
    if (!isDragging) {
      handleToggleSwitchChange();
    }
  };

  return (
    <div className="toggle-switch">
      <label
        className="toggle-switch__label"
        ref={labelRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsDragging(false)}
      >
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          checked={currentTemperatureUnit === "C"}
          onChange={handleCheckboxChange}
        />
        <span className="toggle-switch__text toggle-switch__text_f">F</span>
        <span className="toggle-switch__text toggle-switch__text_c">C</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
