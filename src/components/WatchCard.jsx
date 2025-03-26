import React from "react";

export default function WatchCard({ name, price, image }) {
  return (
    <div className="watch-card">
      <img src={image} alt={name} className="watch-image"/>
      <h3 className="watch-name">{name}</h3>
      <p className="watch-price">{price}</p>
    </div>
  );
}
