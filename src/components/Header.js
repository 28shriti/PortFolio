import React from "react";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        Shriti Nandanwar
      </a>
      {/* Toggler for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#projects">
              Project
            </a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#blog">
              Blogs
            </a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item ms-3">
              <a
                href="/Docs/ShritiNandanwar_Resume.pdf"
                download="ShritiNandanwar_Resume.pdf"
                className="btn btn-primary text-white ms-3"
              >
                Download CV
              </a>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
