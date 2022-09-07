import React, { useState } from "react";
import AddHouseForm from "../components/Houses/AddHouseForm";
import Map from "../components/Map/Map";

const AddHouse = () => {
  const [isMap, setIsMap] = useState(false);
  const [location, setLocation] = useState();

  return (
    <div className={`main ${isMap && "open-map"}`}>
      <div className="map">
        <Map data={(d) => setLocation(d)} select={true} />
      </div>
      <div className="content">
        <AddHouseForm location={location} />
      </div>
      <div className="change-button">
        <button onClick={() => setIsMap(!isMap)}>
          {!isMap ? "Map" : "List"}
        </button>
      </div>
    </div>
  );
};

export default AddHouse;
