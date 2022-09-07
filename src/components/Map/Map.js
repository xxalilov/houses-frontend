import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const Map = (props) => {
  const [location, setLocation] = useState();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCrbJVc126IhDD_4nRbZabngIMz0Td1blA",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: 41.311081, lng: 69.240562 };

  const handleClickMap = (e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    if (props.select) {
      setLocation({ lat, lng });
      props.data({ lat, lng });
    }
  };

  return (
    <GoogleMap
      zoom={11}
      center={center}
      mapContainerClassName="map-container"
      onClick={handleClickMap}
    >
      {props.houses &&
        props.houses.map((house) => (
          <Marker
            position={{ lat: house.lat, lng: house.lng }}
            key={house.id}
          />
        ))}

      {location && (
        <Marker position={{ lat: location.lat, lng: location.lng }} />
      )}
    </GoogleMap>
  );
};

export default Map;
