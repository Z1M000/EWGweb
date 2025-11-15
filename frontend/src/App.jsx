import { useState } from "react";
import AuthPage from "./components/AuthPage";

function App() {
  const backend_uri = "http://127.0.0.1:8000";
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);

  function handleLogin(userData) {
    setUser(userData);
    setShowAuth(false);
  }

  function handleLogout() {
    setUser(null);
    setShowAuth(false);
  }

  async function loadActivities() {
    try {
      const uri = backend_uri + "/activities";
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

  async function loadComments() {
    try {
      const uri = backend_uri + "/comments";
      const res = await fetch(uri);
      const data = await res.json();
      setComments(data);
      setError("");
    } catch (err) {
      setError("Error: " + err);
    }
  }

  let content = null;

  if (showAuth && !user) {
    content = <AuthPage onLogin={handleLogin} />;
  } else if (user) {
    content = (
      <div>
        <h1>Welcome, {user.username}! </h1>
        <button onClick={handleLogout}>Logout</button>

        <button onClick={loadActivities}>Show All Activities</button>
        <button onClick={loadComments}>Show All Comments</button>
      </div>
    );
  } else {
    content = (
      <div>
        <button onClick={() => setShowAuth(true)}>Login</button>
        <button onClick={loadActivities}>Show All Activities</button>
      </div>
    );
  }

  let remaining = totalPoints;

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {content}

      {error && <div style={{ color: "red" }}>{error}</div>}

      {activities.length > 0 && (
        <div>
          <h2>Activities</h2>
          <ul>
            {activities.map(function (act, idx) {
              let current = remaining;
              remaining -= act.points;

              return (
                <li
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 80px 150px 120px",
                  }}
                >
                  <span>{act.name}</span>
                  <span>{act.points} pts</span>
                  <span>Total after: {current}</span>
                  <span>{act.date}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {comments.length > 0 && (
        <div>
          <h2>Comments</h2>
          <ul>
            {comments.map(function (cmt, idx) {
              return (
                <li key={idx}>
                  <span>{cmt.time}:</span> <span>{cmt.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
