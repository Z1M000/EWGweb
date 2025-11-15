import "../component_styles/Header.css";
import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <h1>Emory Womens Golf Points Website</h1>
      <nav>
        <Link to="/">
          <button className="login-button">Home</button>
        </Link>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="login-button" onClick={onLogout}>
              Logout
            </button>
            <h1 style={{ textAlign: "center" }}>Welcome, {user.username}!</h1>
          </div>
        ) : (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
