import { NavLink, useNavigate } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/solid";

import logo from "../../logo.webp";

import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="container">
        <div onClick={handleNavigate} className="nav-logo">
          <img src={logo} alt="" />
          <span>QUIZ CONTEST</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? "nav-menu-open" : ""}`}>
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
        <Bars3Icon onClick={handleMenuToggle} className="hamburger-menu" />
      </div>
    </nav>
  );
};

export default Header;
