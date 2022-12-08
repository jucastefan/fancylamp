import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="switch"
          id="switch"
          onChange={props.switchButtonHandler}
          checked={props.checkedSwitchButton}
        />
        <label className="label" htmlFor="switch">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
