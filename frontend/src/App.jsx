import { useEffect, useState } from "react";
import logo from "./logo.svg";
import Roadmap from "./components/Roadmap";
import "./App.css";
import Progress from "./components/Progress";
import More from "./components/More";
import Header from "./components/Header";
import Border from "./components/Border";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import AddActivity from "./components/AddActivity";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
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
  }

  return (
     <Router>
      <Header user={user} onLogout={() => setUser(null)} />
      <Routes>

      <Route path="/" element={<Home user={user} />} />
      <Route path="/login" element={<AuthPage onLogin={setUser} />} />

      <Route
        path="/activities"
        element={
          <ProtectedRoute user={user}>
          </ProtectedRoute>
        }
        />

      </Routes>
    </Router>
  );
}

export default App;
