import { NavLink, useNavigate } from "react-router-dom";
import styles from "./AppNavVertical.module.css";
import { useAuth } from "../contexts/UserAuthContext";
import { useState } from "react";

function AppNavVertical() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/login");
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? `${styles.open}` : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/awards">Awards</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to="/login">login</NavLink>
          ) : (
            <NavLink onClick={handleLogout}>logout</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppNavVertical;
