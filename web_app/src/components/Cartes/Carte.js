import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];

const Carte = () => {
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMapContainer</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Carte;
