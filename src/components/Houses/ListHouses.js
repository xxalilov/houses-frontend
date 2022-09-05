import React from "react";
import Card from "../Card/Card";
import "./ListHouses.css";

const ListHouses = () => {
  return (
    <div className="list-houses">
      <br />
      <div className="list-houses-container">
        <Card className={"house-card"} />
        <Card className={"house-card"} />
        <Card className={"house-card"} />
        <Card className={"house-card"} />
        <Card className={"house-card"} />
        <Card className={"house-card"} />
        <Card className={"house-card"} />
      </div>
    </div>
  );
};

export default ListHouses;
