import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="brand-name">Tempus Regalis</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/preorder">Pre-Order</Link>
      </div>
    </nav>
  );
}
