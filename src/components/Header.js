import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-bar">
      <div className="header-title">
        <span className="flag"></span>
        <span>Jamaica Election Tracker</span>
      </div>
      <div className="header-meta">
        <span className="live-dot"></span>
        <span className="live-label">LIVE UPDATES</span>
        <span className="header-date">Election Date: September 3, 2024</span>
        <span className="header-updated">Last updated: Just now</span>
      </div>
    </header>
  );
}

export default Header;