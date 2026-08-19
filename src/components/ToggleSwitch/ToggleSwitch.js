import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={changeTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <i className={isDark ? "fas fa-moon" : "fas fa-sun"} aria-hidden="true" />
    </button>
  );
};

export default ToggleSwitch;
