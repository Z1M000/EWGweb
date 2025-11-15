import "../component_styles/Progress.css";
import { useState, useEffect } from "react";

function Progress({ reload }) {
  const [activities, setActivities] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [error, setError] = useState("");

  useEffect(
    function () {
      loadActivities();
    },
    [reload]
  );

  async function loadActivities() {
    try {
      const uri = "http://127.0.0.1:8000/activities";
      const res = await fetch(uri);
      const data = await res.json();

      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].points;
      }

      setTotalPoints(sum);
      setActivities(data);
      setError("");
    } catch (err) {
      setError("Error: " + err);
    }
  }

  function formatMMDDYYYY_noTZ(ts) {
    const iso = new Date(ts).toISOString().slice(0, 10); // "2025-11-02"
    const [year, month, day] = iso.split("-");
    return `${month}/${day}/${year}`;
  }

  let remaining = totalPoints;

  return (
    <div className="outer-container">
      <div className="middle-container">
        <div className="points-container">
          <p className="point-value"> Progress </p>
        </div>

        <div className="table-container">
          <table className="progress-table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Points</th>
                <th>Total after</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {activities.map(function (act, idx) {
                let current = remaining;
                remaining -= act.points;

                return (
                  <tr key={idx} className="table-data">
                    <td>{act.name}</td>
                    <td>{act.points}</td>
                    <td>{current}</td>
                    <td>{formatMMDDYYYY_noTZ(act.date)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Progress;
