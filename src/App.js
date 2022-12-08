import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [showLight, setShowLight] = useState(true);
  const [switchButton, setSwitchButton] = useState(true);
  const [checkedSwitchButton, setCheckedSwitchButton] = useState(true);

  const switchButtonHandler = (prevState) => {
    if (switchButton) {
      setSwitchButton(false);
      setCheckedSwitchButton(false);
      setShowLight(false);
    } else {
      setSwitchButton(true);
      setCheckedSwitchButton(true);
      setShowLight(true);
    }
  };

  return (
    <div className="App">
      <Navbar
        switchButtonHandler={switchButtonHandler}
        switchButton={switchButton}
        checkedSwitchButton={checkedSwitchButton}
      />
      <Main showLight={showLight} />
    </div>
  );
};

export default App;
