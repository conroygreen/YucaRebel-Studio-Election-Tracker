import React from "react";
import "./Updates.css";

function Updates() {
  const updates = [
    { text: "PNP wins St. Catherine Southern", time: "25 minutes ago", party: "pnp" },
    { text: "JLP retains Kingston Western seat", time: "42 minutes ago", party: "jlp" },
    { text: "Recount ordered in St. Mary Central", time: "1 hour ago", party: "" },
  ];
  return (
    <div className="updates-card">
      <div className="updates-header">
        <h3>Recent Updates</h3>
        <button className="refresh-btn" title="Refresh">&#x21bb;</button>
      </div>
      <ul className="updates-list">
        {updates.map((u, idx) => (
          <li key={idx} className={`update-item ${u.party}`}>
            <span className="update-dot"></span>
            <span className="update-text">{u.text}</span>
            <span className="update-time">{u.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Updates;