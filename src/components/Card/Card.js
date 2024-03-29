import React from "react";
import "./Card.scss";

const Card = ({ monster }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__image">
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}
            alt=""
          />
        </div>
        <div className="card-content__name">{monster.name}</div>
        <div className="card-content__email">{monster.website}</div>
      </div>
    </div>
  );
};

export default Card;
