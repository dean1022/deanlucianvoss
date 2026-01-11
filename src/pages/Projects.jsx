import React, { useEffect } from "react";
import projectBanner from "../images/project-banner.jpg";
import rcCar from "../images/rc-car.jpg";
import foosball from "../images/foosball.jpg";
import website from "../images/portfolio.png";
import weather from "../images/weather-app.png";
import clock from "../images/world-clock.png";
import poem from "../images/poem-generator.png";
import "./Projects.css";

import { useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <main>
      <div className="container">
        <img
          src={projectBanner}
          alt="heaphones and laptop"
          className="project-banner"
        />
        <div className="centered">
          <h1>Projects</h1>
        </div>
      </div>

      <div className="content">
        <h5>Work Projects</h5>
        <div className="row" id="workproject1">
          <div className="col-6">
            <img src={rcCar} alt="rc car" className="image img-thumbnail" />
          </div>
          <div className="text col-6">
            <h6>RC Car Web Controller</h6>
            <p>
              I created a web-based interface that allowed a Raspberry
              Pi–powered car to be controlled over a local server using
              JavaScript and GPIO integration. The project involved building
              real-time control logic, logging latency data, and documenting
              debugging steps, which strengthened my skills in hardware/software
              integration and responsive system design.
              <br />
              <span className="bold">Company: </span>SAP Canada
              <br />
              <span className="bold">Period: </span>Fall 2018
            </p>
          </div>
        </div>
        <div className="row" id="workproject2">
          <div className="col-6">
            <img
              src={foosball}
              alt="foosball figurines"
              className="image img-thumbnail"
            />
          </div>
          <div className="text col-6">
            <h6>Foosball Scoring System</h6>
            <p>
              I developed a real-time scoring application that integrated
              Arduino sensors with a Java desktop app to automatically track
              goals during foosball matches. The project involved building input
              validation, implementing unit tests for accuracy, and preparing
              demos in fast-paced environments, which enhanced my skills in
              hardware integration, data handling, and reliable system design.
              <br />
              <span className="bold">Company: </span>SAP Canada
              <br />
              <span className="bold">Period: </span>Fall 2018
            </p>
            <p></p>
          </div>
        </div>

        <h5>Personal Projects</h5>
        <div className="row" id="personalproject1">
          <div className="col-6">
            <img
              src={website}
              alt="home page of porfolio website"
              className="image img-thumbnail"
            />
          </div>
          <div className="text col-6">
            <h6>Portfolio Website</h6>
            <p>
              I designed and developed my personal portfolio website from
              scratch using HTML, CSS, JavaScript, and React. The site
              highlights my technical projects, experience, and skills in an
              accessible, user-friendly way. I focused on building a responsive
              design for seamless viewing across devices, applying UI/UX
              principles for clear navigation and layout, and integrating
              GitHub-hosted projects for live demonstrations.
              <br />
              <a
                href="https://deanlucianvoss.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">Website Link</span>
              </a>
              <br />
              <a
                href="https://github.com/dean1022/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">GitHub Link</span>
              </a>
            </p>
          </div>
        </div>
        <div className="row" id="personalproject2">
          <div className="col-6">
            <img
              src={weather}
              alt="weather app"
              className="image img-thumbnail"
            />
          </div>
          <div className="text col-6">
            <h6>Weather App</h6>
            <p>
              I built a responsive weather application using HTML, CSS,
              JavaScript, and the OpenWeather API. The app provides real-time
              weather data for user-selected locations, with a focus on API
              integration, responsive design, and cross-browser compatibility.
              This project strengthened my skills in front-end development and
              user-centered design.
              <br />
              <a
                href="https://deans-weather-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">Website Link</span>
              </a>
              <br />
              <a
                href="https://github.com/dean1022/VanillaWeatherSearch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">GitHub Link</span>
              </a>
            </p>
          </div>
        </div>
        <div className="row" id="personalproject3">
          <div className="col-6">
            <img
              src={clock}
              alt="world clock site"
              className="image img-thumbnail"
            />
          </div>
          <div className="text col-6">
            <h6>World Clock</h6>
            <p>
              I developed a web-based world clock using HTML, CSS, and
              JavaScript to display the current time across multiple global
              cities. The project emphasized time zone conversions, dynamic DOM
              updates, and responsive layout design, helping me strengthen my
              skills in JavaScript logic and user interface development.
              <br />
              <a
                href="https://deanworldclock.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">Website Link</span>
              </a>
              <br />
              <a
                href="https://github.com/dean1022/World-Clock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">GitHub Link</span>
              </a>
            </p>
          </div>
        </div>
        <div className="row" id="personalproject4">
          <div className="col-6">
            <img
              src={poem}
              alt="AI poem generator page"
              className="image img-thumbnail"
            />
          </div>
          <div className="text col-6">
            <h6>AI Poem Generator</h6>
            <p>
              I created an interactive web app that generates original poems
              using AI integration with JavaScript. The project highlights my
              ability to work with APIs, front-end interactivity, and creative
              UI/UX design, while demonstrating how technology can be used for
              both functional and artistic purposes.
              <br />
              <a
                href="https://aienglishpoemgenerator22.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">Website Link</span>
              </a>
              <br />
              <a
                href="https://github.com/dean1022/AIPoemGenerator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold">GitHub Link</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
