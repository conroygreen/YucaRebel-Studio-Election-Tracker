import React from "react";
import "./RaceToMajority.css";

function RaceToMajority() {
  return (
    <div className="race-majority-card">
      <h3>Race to Majority <span className="minor-text">(32 seats needed)</span></h3>
      <div className="race-bars">
        <div className="race-bar-row">
          <span className="race-party-label jlp">JLP</span>
          <div className="race-bar-outer">
            <div className="race-bar-inner jlp" style={{ width: "72%" }} />
          </div>
          <span className="race-bar-count">23</span>
        </div>
        <div className="race-bar-row">
          <span className="race-party-label pnp">PNP</span>
          <div className="race-bar-outer">
            <div className="race-bar-inner pnp" style={{ width: "59%" }} />
          </div>
          <span className="race-bar-count">19</span>
        </div>
      </div>
    </div>
  );
}

export default RaceToMajority;