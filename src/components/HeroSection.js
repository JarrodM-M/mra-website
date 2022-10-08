import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="../images/Duntara in Room.jpg" alt="" width="100%"></img>
      <h1>Art inspired life</h1>
      <p>lorumnipsum</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Shop Now
        </Button>
      </div>{" "}
    </div>
  );
}

export default HeroSection;
