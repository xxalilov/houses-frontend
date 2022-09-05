import React, { useState } from "react";
import ListHouses from "../components/Houses/ListHouses";
import Map from "../components/Map/Map";
import "./Main.css";

const Main = () => {
  const [isMap, setIsMap] = useState(false);

  return (
    <div className={`main ${isMap && "open-map"}`}>
      <div className="map">
        <Map />
      </div>
      <div className="content">
        <ListHouses />
      </div>
      <div className="change-button">
        <button onClick={() => setIsMap(!isMap)}>
          {!isMap ? "Map" : "List"}
        </button>
      </div>
    </div>
  );
};

export default Main;
