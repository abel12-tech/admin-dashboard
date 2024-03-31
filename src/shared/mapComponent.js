import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, ZoomControl } from 'react-leaflet';

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
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={[0, 0]} zoom={4} style={{ height: '100%', width: '100%' }} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker position="center" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
