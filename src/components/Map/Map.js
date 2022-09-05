import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCrbJVc126IhDD_4nRbZabngIMz0Td1blA",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: 41.311081, lng: 69.240562 };

  return (
    <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
      <Marker
        position={{ lat: 41.31061760000001, lng: 69.24502474555662 }}
        title="Xolbek Xalilov"
      />
    </GoogleMap>
  );
};

// function Map() {
//   return (
//     <GoogleMap
//       zoom={10}
//       center={{ lat: 44, lng: -80 }}
//       mapContainerClassName="map-container"
//     ></GoogleMap>
//   );
// }

export default Map;
