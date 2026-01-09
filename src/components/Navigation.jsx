import logo from "./logo.png";
import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="Homepage">
            <img src={logo} width={50} height={50} alt="DLV logo" />
            Dean Lucian Voss
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" title="Homepage">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" title="About Dean">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  title="Dean's Projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/certifications"
                  title="Dean's Certifications"
                >
                  Certifications
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                  title="Dean's Services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  type="button"
                  className="btn nav-link"
                  to="/contact"
                  id="contactBtn"
                  title="Contact Dean"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
