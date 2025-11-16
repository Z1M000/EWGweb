import "../component_styles/AddActivity.css";
import { useState } from "react";

function AddActivity({ onActivityAdded }) {
  const [activityName, setActivityName] = useState("");
  const [points, setPoints] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);

  const presetActivities = [
    { name: "Team Win", points: 100 },
    { name: "Team Round Under-Par", points: 50 },
    { name: "Beat Scoring Record", points: 100 },
    { name: "Team Tournament Goal", points: 25 },
    { name: "Play day goal (per person per round)", points: 20 },
    { name: "Close-out Drills", points: 10 },
    { name: "Community Service", points: 50 },
    { name: "Team Top 5 in D1", points: 50 },
    { name: "Ryder Cup (per person for winning a match)", points: 5 },
  ];

  const filteredOptions = presetActivities.filter((opt) =>
    opt.name.toLowerCase().includes(activityName.toLowerCase())
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const newActivity = {
      name: activityName,
      points: Number(points),
      date: new Date(date).getTime(),
    };

    await fetch("http://127.0.0.1:8000/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newActivity),
    });

    if (onActivityAdded) {
      onActivityAdded();
    }

    setActivityName("");
    setPoints(0);
    setDate(today);
  }

  return (
    <div className="outer-container">
      <div className="middle-container add">
        <div className="points-container">
          <p className="point-value">Add Activity</p>
        </div>

        <div className="add-activity-container">
          <form className="add-activity-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Activity Name</label>

                <div className="custom-dropdown">
                  <input
                    type="text"
                    className="activity-input"
                    value={activityName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setActivityName(value);

                      if (value.trim() === "") {
                        setShowOptions(false);
                      } else {
                        setShowOptions(true);
                      }
                    }}
                    onClick={() => {
                      if (activityName === "") setShowOptions(true);
                    }}
                    required
                    placeholder="Type or choose activity"
                  />

                  {showOptions && filteredOptions.length > 0 && (
                    <div className="dropdown-options">
                      {filteredOptions.map((opt, index) => (
                        <div
                          key={index}
                          className="dropdown-option"
                          onClick={() => {
                            setActivityName(opt.name);
                            setPoints(opt.points);
                            setShowOptions(false);
                          }}
                        >
                          {opt.name} : {opt.points} pts
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Points</label>
                <input
                  type="number"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="add-button">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddActivity;
