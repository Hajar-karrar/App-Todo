import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo et Titre */}
      <div className="logo">
        <img src="loo.jpg" alt="Logo" />
        <span className="logo-text">
          <span style={{ color: "#0590fe" }}>Pro</span>
          <span style={{ color: "#f6861b" }}>Tasker</span>
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/todo")}
        >
          Create TO-DO List
        </button>
        <button
          className="nav-button"
        >
          About US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
