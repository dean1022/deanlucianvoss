import React from "react";
import keyboard from "../images/keyboard.jpg";
import weatherApp from "../images/weather-app.png";
import worldClock from "../images/world-clock.png";
import poemGenerator from "../images/poem-generator.png";
import team from "../images/team.jpg";
import rcCar from "../images/rc-car.jpg";
import foosball from "../images/foosball.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="content">
        <h1>Full-stack developer based in Toronto, Canada</h1>
        <p>Previously known as Lasini Kurukulasooriya from 2002-2024</p>
        <Link
          className="btn btn-dark"
          to="/contact"
          role="button"
          id="contactBtn"
        >
          Contact
        </Link>

        <h5>About Me</h5>
        <p>
          <Link to="/about">From hardware to coding... {">"}</Link>
        </p>
        <img src={keyboard} alt="keyboard" id="keyboard" />

        <h5 className="centerLine">Personal Projects</h5>
        <div className="row d-flex justify-content-evenly projects">
          <div className="project1 col-sm-3 centerLine">
            <Link to="/projects">
              <img
                src={weatherApp}
                alt="project 1"
                className="pop-off img-fluid"
              />
              <p>Weather App</p>
            </Link>
          </div>
          <div className="project2 col-sm-3 centerLine">
            <Link to="/projects">
              <img
                src={worldClock}
                alt="project 2"
                className="pop-off img-fluid"
              />
              <p>World Clock</p>
            </Link>
          </div>
          <div className="project3 col-sm-3 centerLine">
            <Link to="/projects">
              <img
                src={poemGenerator}
                alt="project 3"
                className="pop-off img-fluid"
              />
              <p>Poem Generator</p>
            </Link>
          </div>
        </div>
        <div className="title row d-flex justify-content-evenly">
          <Link to="/about">
            {" "}
            <h5 className="centerLine">Experience</h5>
          </Link>
          <div className="experiences col-sm-5">
            <div className="row experience1">
              <div className="placePosition col-6">
                <p className="experienceTitle">Eeshani Guest Inn</p>
                <p>Junior Developer</p>
                <p>Junior Automation Support</p>
                <p>IT Support</p>
              </div>
              <div className="date col-3">2016-24</div>
            </div>
            <div className="row experience2">
              <div className="placePosition col-6">
                <p className="experienceTitle">SAP Canada</p>
                <p>Junior Programmer</p>
              </div>
              <div className="date col-3">2018-19</div>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={team} alt="" className="img-fluid teamImg" />
          </div>
        </div>
        <h5 className="centerLine">Work Projects</h5>
        <br />
        <div className="row d-flex justify-content-evenly projectTitle">
          <div className="project1 col-sm-4 centerLine">
            <Link to="/projects">
              <img src={rcCar} alt="project 1" className="pop-off img-fluid" />
              <p>RC Car Web Controller</p>
            </Link>
          </div>
          <div className="project2 col-sm-4 centerLIne">
            <Link to="/projects">
              <img
                src={foosball}
                alt="project 2"
                className="pop-off img-fluid"
              />
              <p>Foosball Scoring System</p>
            </Link>
          </div>
        </div>
        <div className="centerLine">
          <h5>Skills</h5>
          <br />
          <p>Technical Support & Systems</p>
          <p>Full Stack Development</p>
          <Link to="/about">...more</Link>
          <br />
          <h5>Certifications</h5>
          <br />
          <p>IT Support</p>
          <p>Web Development</p>
          <Link to="/certifications">...more</Link>
          <h5>Services</h5>
          <br />
          <p>Web Design & Development</p>
          <p>Web Applications</p>
          <Link to="/services">...more</Link>
        </div>
        <div className="contact-box">
          <h5>Let's Work Together</h5>
          <br />
          <Link
            className="btn btn-dark"
            to="/contact"
            role="button"
            id="contactBtn"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
