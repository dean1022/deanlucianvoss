import React from "react";
import shecodes from "../images/shecodes-diploma.png";
import asana from "../images/asana-workflow.png";
import itSupport from "../images/google-it-support.png";
import "./Certifications.css";

export default function Certifications() {
  return (
    <main>
      <div className="content">
        <div className="row d-flex justify-content-center">
          <a
            href="https://www.shecodes.io/graduates/93280-dean-voss"
            target="_blank"
          >
            <img
              src={shecodes}
              alt="SheCodes Front-End Developer Diploma"
              className="image img-fluid"
            />
          </a>
        </div>
        <div className="row d-flex justify-content-center">
          <a
            href="https://certifications.asana.com/61df24b9-4eb3-49e2-aa06-f04b8b809d9c#acc.wuYvnxyh"
            target="_blank"
          >
            <img src={asana} alt="Asana Workflow" className="image img-fluid" />
          </a>
        </div>
        <div className="row d-flex justify-content-center">
          <a
            href="https://coursera.org/share/b9a2245ae26de9320fbd82d1b9c98f62"
            target="_blank"
          >
            <img
              src={itSupport}
              alt="Google IT Support"
              className="image img-fluid"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
