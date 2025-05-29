import React from "react";
import "./ConstituencyMap.css";

function ConstituencyMap() {
  return (
    <div className="constituency-map-card">
      <h3>Jamaica Constituency Map</h3>
      <div className="map-placeholder">
        {/* Placeholder for map */}
        <svg width="200" height="80">
          <rect x="10" y="10" width="180" height="60" fill="#111" rx="10" />
        </svg>
      </div>
      <div className="map-legend">
        <span>
          <span className="legend-dot jlp"></span> JLP (Jamaica Labour Party)
        </span>
        <span>
          <span className="legend-dot pnp"></span> PNP (People's National Party)
        </span>
      </div>
    </div>
  );
}

export default ConstituencyMap;