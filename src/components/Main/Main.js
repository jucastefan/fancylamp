import React from "react";
import "./Main.css";
import light from "../../images/light.png";
import lamp from "../../images/lamp.png";

const Main = ({ showLight }) => {
  return (
    <main className="main-container">
      <div class="lamp-container">
        <div class="lamp">
          <img className="img-lamp" src={lamp} alt="lamp"></img>{" "}
        </div>
        <div class="light">
          <img
            className={`img-light ${!showLight && "hidden "}`}
            src={light}
            alt="light"
          ></img>
        </div>
      </div>
      <div class="form-container">
        <h1 className="main-heading">
          The best <br /> in lighting
        </h1>
        <p className="main-paragraph">
          This is the first lamp from our company. We are making a huge
          collection of <br /> modern Lamps in all categories from home use to
          office use.
        </p>
        <button href="#" class="form-button">
          Ship Now🛒
        </button>
      </div>
    </main>
  );
};

export default Main;
