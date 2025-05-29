import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-bar">
      <div>
        &copy; 2024 Jamaica Election Tracker
        <br />
        <span className="footer-data">
          Data provided by the Electoral Commission of Jamaica
        </span>
      </div>
      <div className="footer-links">
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;