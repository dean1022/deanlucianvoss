import React from "react";
import servicesBanner from "../images/services-banner.jpg";
import servicesLife from "../images/services-life.jpg";
import "./Services.css";

export default function Services() {
  return (
    <main>
      <div className="content">
        <h1>Services</h1>
        <p>
          Your website is your first impression to the world. I create modern,
          responsive, and user-friendly web solutions that help individuals,
          startups, and organizations stand out globally. Whether you need a
          quick professional site, a custom-coded application, or automation to
          streamline your work, I provide solutions that are designed for impact
          and built for growth.
        </p>
        <img
          src={servicesBanner}
          alt="cartoon character working"
          className="banner"
        />
        <br />
        <h5>Web Design & Development</h5>
        <ul>
          <li>Custom websites with HTML, CSS, JavaScript, and React</li>
          <li>
            Fully responsive layouts optimized for desktop, tablet, and mobile
          </li>
          <li>Focus on UI/UX, accessibility, and global reach</li>
          <li>
            Experienced with Wix and Squarespace for clients who prefer
            no-code/low-code solutions
          </li>
        </ul>
        <br />
        <h5>Web Applications</h5>
        <ul>
          <li>
            Scalable, interactive applications with API and database integration
          </li>
          <li>Built for performance, security, and long-term reliability</li>
          <li>Designed to support businesses expanding across borders</li>
        </ul>
        <br />
        <h5>Maintenance & Support</h5>
        <ul>
          <li>Ongoing updates, bug fixes, and performance optimization</li>
          <li>
            Multi-browser and multi-device testing for a consistent global
            experience
          </li>
          <li>Clear documentation and hand-off support to empower your team</li>
        </ul>
        <br />
        <h5>Automation & Workflow Tools</h5>
        <ul>
          <li>Custom Python automation to save time and cut costs</li>
          <li>
            Smart tools for email handling, data processing, and reporting
          </li>
          <li>Practical solutions that scale with your growing needs</li>
        </ul>

        <img
          src={servicesLife}
          alt="cartoon character looking"
          className="banner"
        />

        <h5>Why Work With Me?</h5>
        <p>
          I combine technical expertise, design thinking, and cultural awareness
          to deliver web solutions that resonate with a global audience. From
          startups launching their first site to organizations modernizing their
          digital presence, I help create websites and tools that are
          accessible, scalable, and ready for worldwide impact.
        </p>
        <p>
          <span className="fst-italic">Let's bring your vision to life.</span>
        </p>
        <a
          className="btn btn-dark"
          href="contact.html"
          role="button"
          id="contactButton"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
