import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Tempus Regalis. All Rights Reserved.</p>
      <a href="https://instagram.com/yourwatchstore" className="instagram-link">
        <FaInstagram /> Follow us on Instagram
      </a>
    </footer>
  );
}
