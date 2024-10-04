import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brand/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" style={{ width: "40px" }} />
      <div className="nav-links">
        <Link className="li" to="/">Home</Link>
        <Link className="li" to="/projects">Projects</Link>
        <Link className="li" to="/education">Education</Link>
        <Link className="li" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
