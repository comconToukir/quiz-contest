import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../logo.webp";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");
  
  return (
    <nav>
      <div className="container">
        <div onClick={handleNavigate} className='nav-logo'>
          <img src={logo} alt="" />
          <span>QUIZ CONTEST</span>
        </div>
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
      </div>
    </nav>
  );
};

export default Header;
