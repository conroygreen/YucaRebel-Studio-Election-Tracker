import React from "react";
import "./TurnoutByParish.css";

function TurnoutByParish() {
  // Fake data for illustration
  const parishes = [
    { name: "Kingston", value: 78 },
    { name: "St. Andrew", value: 72 },
    { name: "St. Catherine", value: 65 },
    { name: "Clarendon", value: 59 },
    { name: "Manchester", value: 61 },
  ];

  return (
    <div className="turnout-parish-card">
      <h3>Voter Turnout by Parish</h3>
      <div className="bar-chart">
        {parishes.map((p, i) => (
          <div key={i} className="bar-row">
            <div
              className="bar"
              style={{ height: `${p.value}%`, background: "#d32f2f" }}
              title={`${p.value}%`}
            ></div>
            <span className="bar-label">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TurnoutByParish;