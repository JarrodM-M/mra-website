import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>View</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Picture 1"
              label="Painting"
              path="/gallery"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
