import React from "react";
import "./PartyDistribution.css";

function PartyDistribution() {
  return (
    <div className="party-distribution-card">
      <h3>Party Distribution</h3>
      <div className="donut-chart">
        {/* Placeholder for donut chart */}
        <svg width="120" height="120" viewBox="0 0 42 42" className="donut">
          {/* JLP: black, PNP: red, Undecided: gray */}
          <circle
            className="donut-segment"
            cx="21"
            cy="21"
            r="15.9155"
            fill="transparent"
            stroke="#111"
            strokeWidth="5"
            strokeDasharray="55 45"
            strokeDashoffset="0"
          />
          <circle
            className="donut-segment"
            cx="21"
            cy="21"
            r="15.9155"
            fill="transparent"
            stroke="#d32f2f"
            strokeWidth="5"
            strokeDasharray="35 65"
            strokeDashoffset="-55"
          />
          <circle
            className="donut-segment"
            cx="21"
            cy="21"
            r="15.9155"
            fill="transparent"
            stroke="#bbb"
            strokeWidth="5"
            strokeDasharray="10 90"
            strokeDashoffset="-90"
          />
        </svg>
      </div>
      <div className="party-legend">
        <span>
          <span className="legend-dot jlp"></span> JLP
        </span>
        <span>
          <span className="legend-dot pnp"></span> PNP
        </span>
        <span>
          <span className="legend-dot undecided"></span> Undecided
        </span>
      </div>
    </div>
  );
}

export default PartyDistribution;