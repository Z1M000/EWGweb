import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const loginTime = localStorage.getItem("loginTime");

    if (!savedUser || !loginTime) return null;

    const now = Date.now();
    const THIRTY_MIN = 30 * 60 * 1000;

    if (now - parseInt(loginTime) > THIRTY_MIN) {
      localStorage.removeItem("user");
      localStorage.removeItem("loginTime");
      return null;
    }

    return JSON.parse(savedUser);
  });

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      const loginTime = parseInt(localStorage.getItem("loginTime"));
      if (!loginTime) return;

      const now = Date.now();
      const THIRTY_MIN = 30 * 60 * 1000;

      if (now - loginTime > THIRTY_MIN) {
        handleLogout();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [user]);

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("loginTime");
  }

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<AuthPage onLogin={setUser} />} />

        <Route
          path="/activities"
          element={<ProtectedRoute user={user}></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
