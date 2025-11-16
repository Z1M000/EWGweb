import { useState } from "react";
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
  const [user, setUser] = useState(null);

  function handleLogout() {
    setUser(null);
  }

  return (
     <Router>
      <Header user={user} onLogout={() => setUser(null)} />

      <Routes>

      <Route path="/" element={<Home user={user} />} />

      {/* Login page */}
      <Route path="/login" element={<AuthPage onLogin={setUser} />} />

      {/* Example private page */}
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
