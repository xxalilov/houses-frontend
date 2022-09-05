import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-header">
        <img
          src={
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </div>
      <div className="card-body">
        <h3 className="price">100000 so'm</h3>
        <p className="area">
          100 m<sup>2</sup>
        </p>
        <p className="address">
          Toshkent shahri, Yunusobod tumani, 5 uy 16-xonadon
        </p>
      </div>
    </div>
  );
};

export default Card;
