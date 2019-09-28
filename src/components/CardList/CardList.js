import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = props => {
  return (
    <div className="App">
      <div className="cardlist">
        {props.monsters.map((monster, ind) => (
          <Card monster={monster} key={ind} ind={ind} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
