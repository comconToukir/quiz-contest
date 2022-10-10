import { NavLink } from "react-router-dom";

import logo from "../../logo.webp";

import "./Header.scss";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <span>QUIZ CONTEST</span>
      <div className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/stats"
        >
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
