import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-header">
        <img
          src={
            !props.house.image
              ? "/no-photo.jpg"
              : `http://206.189.200.152/${props.house.image}`
          }
        />
      </div>
      <div className="card-body">
        <h3 className="price">{props.house.price}</h3>
        <p className="area">
          {props.house.area} m<sup>2</sup>
        </p>
        <p className="address">{props.house.address}</p>
      </div>
    </div>
  );
};

export default Card;
