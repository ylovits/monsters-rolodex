import React from "react";
import "./Card.scss";

const Card = ({ monster, ind }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__image">
          <img
            src={`https://robohash.org/${ind}?set=set2&size=200x200`}
            alt=""
          />
        </div>
        <div className="card-content__name">{monster.name}</div>
        <div className="card-content__email">{monster.name}</div>
      </div>
    </div>
  );
};

export default Card;
