import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>©{new Date().getFullYear} Dean Lucian Voss</p>
        <p>Toronto, Canada</p>
      </div>
    </footer>
  );
}
