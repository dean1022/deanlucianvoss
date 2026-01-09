import React from "react";

export default function Contact() {
  return (
    <main>
      <div
        class="row d-flex justify-content-evenly"
        style="gap: 20px; margin: 20px"
      >
        <div class="contact col-sm-3" style="text-align: center">
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
        <div class="col-sm-3" style="text-align: center">
          <img
            src="images/profile-pic.jpeg"
            alt="Profile picture of Dean"
            class="img-fluid"
            style="width: 150px; height: auto"
          />
        </div>
      </div>
    </main>
  );
}
