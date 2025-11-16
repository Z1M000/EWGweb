import "../component_styles/Header.css";
import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="logo-circle">E</div>
          <div className="site-title">
            Emory Women&apos;s Golf Points Game Website
          </div>
        </div>

        <nav className="nav-buttons">
          {user ? (
            <div className="user-box">
              <span className="site-title">Welcome, {user.username}!</span>
              <button className="login-button" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          )}

          <Link to="/">
            <button className="login-button">Home</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
