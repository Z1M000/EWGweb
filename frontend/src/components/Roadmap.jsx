import '../component_styles/Roadmap.css';
import { useState } from "react";

//425 hat
//850 pottery



function Roadmap({ progress = 0, milestones = [] }) {
   const [currentPoints, setCurrentPoints] = useState(0);

  const maxPoints = 850;

  const goals = [
    { value: 425, label: "Custom Designed Hat" },
    { value: 150, label: "Coach Sam's Makeup" },
    { value: 850, label: "Pottery Party" },
  ];

   const milestonePercents = goals.map(g => ({
    ...g,
    percent: (g.value / maxPoints) * 100
  }));

  const percentFilled = (currentPoints / maxPoints) * 100;

  function handleChange(e) {
  const text = e.target.value;

  if (text === "") {
    setCurrentPoints("");
    return;
  }

  let val = Number(text);

  if (val < 0) val = 0;
  if (val > maxPoints) val = maxPoints;

  setCurrentPoints(val);
}

  return (
    <div className="outer-container">
      <div className="middle-container">

        <div className="points-container">
          <p className="point-value">{currentPoints} Points</p>
          <p className="total-points">Total Points</p>
        </div>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percentFilled}%` }}
            ></div>

              {milestonePercents.map((m, i) => {
            const achieved = currentPoints >= m.value;
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

                {isLast && (
                  <div className="flag">🚩</div>
                )}
              </div>
            );
          })}
        </div>

      <div className="milestone-label-row">
        {milestonePercents.map((m, i) => (
          <div
            key={i}
            className="milestone-label-container"
            style={{ left: `${m.percent}%` }}
          >
            <p className="milestone-label-text">
              {m.label}<br />
              <span className="milestone-points">{m.value} pts</span>
            </p>
          </div>
        ))}
        </div>

          <div
            className="golf-cart"
            style={{ left: `${percentFilled}%` }}
          >
            🛺
          </div>
        </div>

        <input
          type="number"
          className="points-input"
          value={currentPoints}
          min="0"
          max={maxPoints}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Roadmap;