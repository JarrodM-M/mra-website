import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link to="/" className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img src="/" alt="Painting Info" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">s</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
