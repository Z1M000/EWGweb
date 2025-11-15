import '../component_styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Emory Womens Golf Points Website</h1>
      <nav>
        <Link to="/">
  <button className="login-button">Home</button>
</Link>

<Link to="/login">
  <button className="login-button">Login</button>
</Link>
      </nav>
    </header>
  );
}

export default Header;