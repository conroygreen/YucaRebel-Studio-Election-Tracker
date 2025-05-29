import React from "react";
import "./ConstituencyResults.css";

function ConstituencyResults() {
  const rows = [
    {
      constituency: "Kingston Central",
      winner: "JLP",
      votes: "12,543",
      margin: "+1,245",
      status: "Confirmed",
    },
    {
      constituency: "St. Andrew Southern",
      winner: "PNP",
      votes: "11,876",
      margin: "+2,134",
      status: "Confirmed",
    },
    {
      constituency: "Clarendon Northern",
      winner: "JLP",
      votes: "10,432",
      margin: "+876",
      status: "Confirmed",
    },
    {
      constituency: "St. Mary Central",
      winner: "PNP",
      votes: "9,876",
      margin: "+123",
      status: "Recount",
    },
    {
      constituency: "St. Elizabeth South Western",
      winner: "JLP",
      votes: "13,654",
      margin: "+3,211",
      status: "Confirmed",
    },
  ];
  return (
    <div className="results-table-card">
      <div className="results-table-header">
        <h3>Constituency Results</h3>
        <input className="results-search" type="text" placeholder="Search constituencies." />
      </div>
      <table className="results-table">
        <thead>
          <tr>
            <th>Constituency</th>
            <th>Winner</th>
            <th>Votes</th>
            <th>Margin</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.constituency}</td>
              <td>
                <span className={`winner-badge ${r.winner.toLowerCase()}`}>{r.winner}</span>
              </td>
              <td>{r.votes}</td>
              <td>{r.margin}</td>
              <td>
                <span className={`status-badge ${r.status.toLowerCase()}`}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="results-pagination">
        <span>Showing 5 of 63 constituencies</span>
        <div>
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ConstituencyResults;