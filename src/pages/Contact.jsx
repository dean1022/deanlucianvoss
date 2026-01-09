import React from "react";
import profile from "../images/profile-pic.jpeg";
import "./Contact.css";

export default function Contact() {
  return (
    <main>
      <div className="row d-flex justify-content-evenly gap">
        <div className="contact col-sm-3 center">
          <h1>Contact me</h1>
          <br />
          <a href="http://www.linkedin.com/in/dean-voss" target="_blank">
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/dean1022?tab=repositories"
            target="_blank"
          >
            GitHub
          </a>
          <br />
          <a href="mailto:deanlucianvoss@gmail.com" target="_blank">
            deanlucianvoss@gmail.com
          </a>
        </div>
        <div className="col-sm-3 center">
          <img
            src={profile}
            alt="Profile picture of Dean"
            className="img-fluid profile-pic"
          />
        </div>
      </div>
    </main>
  );
}
