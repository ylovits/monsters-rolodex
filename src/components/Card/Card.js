import React from "react";
import "./Card.scss";

const Card = ({ monster }) => {
  return (
    <div className="monster">
      <div className="monster-card">
        <div className="monster-card__image">
          <img src="https://source.unsplash.com/random/200x200" alt="" />
        </div>
        <div className="monster-card__name">{monster.name}</div>
        <div className="monster-card__email">{monster.name}</div>
      </div>
    </div>
  );
};

export default Card;
