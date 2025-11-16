import "../component_styles/Roadmap.css";
import { useState } from "react";

function Roadmap({ totalPoints }) {
  const [maxPoints] = useState(850);

  const goals = [
    { value: 425, label: "Custom Designed Hat" },
    { value: 150, label: "Coach Sam's Makeup" },
    { value: 850, label: "Pottery Party" },
  ];

   function clamp(num, min, max) {
  return Math.max(min, Math.min(num, max));
}

  let percentFilled = (totalPoints / maxPoints) * 100;
  percentFilled = clamp(percentFilled, 0, 100);


  const milestonePercents = goals.map(function (g) {
    return {
      ...g,
      percent: clamp((g.value / maxPoints) * 100, 0, 100),
    };
  });

 
  return (
    <div className="outer-container">
      <div className="middle-container">
        <div className="points-container">
          <p className="total-points">TOTAL POINTS</p>
          <p className="point-value">{totalPoints}</p>
          <p className="total-points">Fall 2025 Goal: 850 pts</p>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percentFilled}%` }}
            ></div>
            {milestonePercents.map(function (m, i) {
              const achieved = totalPoints >= m.value;
              const isLast = i === milestonePercents.length - 1;
              return (
                <div
                  key={i}
                  className={`milestone-dot ${achieved ? "achieved" : ""} ${
                    isLast ? "final-dot" : ""
                  }`}
                  style={{ left: `${m.percent}%` }}
                >
                  {achieved && <span className="checkmark">✔</span>}
                  {isLast && <div className="flag">⛳</div>}
                </div>
              );
            })}
          </div>
          <div className="milestone-label-row">
            {milestonePercents.map(function (m, i) {
              return (
                <div
                  key={i}
                  className="milestone-label-container"
                  style={{ left: `${m.percent}%` }}
                >
                  <p className="milestone-label-text">
                    {m.label}
                    <br />
                    <span className="milestone-points">{m.value} pts</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="golf-cart" style={{ left: `${percentFilled}%` }}>
            🛺
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
