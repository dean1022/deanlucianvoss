import logo from "./logo.png";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html" title="Homepage">
            <img src={logo} width={50} height={50} alt="DLV logo" />
            Dean Lucian Voss
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="home.html" title="Homepage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html" title="About Dean">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="projects.html"
                  title="Dean's Projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  class="nav-link"
                  href="certifications.html"
                  title="Dean's Certifications"
                >
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="services.html"
                  title="Dean's Services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  type="button"
                  className="btn nav-link"
                  href="contact.html"
                  id="contactBtn"
                  title="Contact Dean"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
