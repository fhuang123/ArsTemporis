import React from "react";
import WatchCard from "../components/WatchCard";

const watches = [
  { name: "Seiko 5 Sports", price: "$280", image: "/seikoSport5.jpg" },
  { name: "Seiko 5 Sports", price: "$280", image: "/seikoSport5.1.jpg" },
  { name: "Timex waterbury", price: "$220", image: "/timexWaterbury.jpg" },
  { name: "Orient Neo", price: "$220", image: "/orientNeo.jpg" },
  { name: "Orient Mako", price: "$220", image: "/orientMako.jpg" },
  { name: "Tissot Seastar", price: "$220", image: "/tissotSeastar.jpg" },
];

export default function Home() {
  return (
    <div className="home-page">
      <h2 className="collection-title">Our Collection</h2>
      <div className="watch-grid">
        {watches.map((watch, index) => (
          <WatchCard key={index} {...watch} />
        ))}
      </div>
    </div>
  );
}
