import React from "react";
import "./SummaryCards.css";

function SummaryCards() {
  return (
    <div className="summary-cards">
      <div className="summary-card">
        <div className="summary-card-value">42/63</div>
        <div className="summary-card-label">Constituencies Reporting</div>
        <span className="summary-card-icon check">&#10003;</span>
      </div>
      <div className="summary-card">
        <div className="summary-card-value">23</div>
        <div className="summary-card-label">Jamaica Labour Party</div>
        <span className="summary-card-icon up">&#8593;</span>
      </div>
      <div className="summary-card pnp">
        <div className="summary-card-value">19</div>
        <div className="summary-card-label">People's National Party</div>
        <span className="summary-card-icon up">&#8593;</span>
      </div>
      <div className="summary-card turnout">
        <div className="summary-card-value">63.2%</div>
        <div className="summary-card-label">1.2M Registered Voters</div>
        <span className="summary-card-icon person">&#128100;</span>
      </div>
    </div>
  );
}

export default SummaryCards;