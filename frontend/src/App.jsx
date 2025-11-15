import { useState } from "react";
import AuthPage from "./components/AuthPage";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
    setShowAuth(false);
  }

  function handleLogout() {
    setUser(null);
    setShowAuth(false);
  }

  let content = null;

  if (showAuth && !user) {
    content = <AuthPage onLogin={handleLogin} />;
  } else if (user) {
    content = (
      <div>
        <h1>Welcome, {user.username}! </h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <button
          onClick={function () {
            setShowAuth(true);
          }}
        >
          Login
        </button>
      </div>
    );
  }

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
    </div>
  );
}

export default App;
