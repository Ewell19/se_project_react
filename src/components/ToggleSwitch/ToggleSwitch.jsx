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

      // If it's a simple click (minimal drag distance), just toggle
      if (distance < 5) {
        handleToggleSwitchChange();
      } else {
        // For drag, determine based on final position
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
          readOnly
          style={{ pointerEvents: "none" }}
        />
        <span className="toggle-switch__text toggle-switch__text_f">F</span>
        <span className="toggle-switch__text toggle-switch__text_c">C</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
