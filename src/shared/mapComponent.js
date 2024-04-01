import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ setCoordinates }) => {
  const [position, setPosition] = useState(null);

  const handleClick = (e) => {
    setPosition(e.latlng);
    setCoordinates(e.latlng.lat, e.latlng.lng);
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleClick,
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div style={{ height: "384px", width: "100%" }}>
      <MapContainer
        center={[9.033, 38.75]}
        zoom={2}
        style={{ height: "384px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker setCoordinates={setCoordinates} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
