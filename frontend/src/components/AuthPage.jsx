import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component_styles/AuthPage.css";
import { useRole } from "../components/RoleProvider";

const backend_uri = "https://ewgweb.onrender.com";

function AuthPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginAsPlayer, loginAsCoach } = useRole();
  

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      let uri = backend_uri + "/login";
      const res = await fetch(uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      

      if (!res.ok) {
        setError("Invalid username or password");
        return;
      }

      const now = Date.now();
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("loginTime", now.toString());

      onLogin({ username: data.username, role: data.role });

       if (data.role === "coach") loginAsCoach();
      else loginAsPlayer();

      navigate("/");
    } catch (err) {
      setError("Error: " + err);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">👋 Hi Players/Coaches!</h1>
        <p className="auth-subtitle">Log in to continue</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Username
            <input
              type="text"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </label>

          <label className="auth-label">
            Password
            <input
              type="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </label>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
