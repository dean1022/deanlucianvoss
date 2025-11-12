import React from "react";

export default function About() {
  return (
    <main>
      <div class="content">
        <h1>About</h1>
        <p>From hardware to coding...</p>

        <img src="images/banner.gif" alt="gif banner" id="banner" />

        <div style="text-align: center; margin: 60px">
          <p>
            My journey into technology started in grade 7 when I was introduced
            to 3D printing and computer hardware. What began as curiosity grew
            into a passion for problem solving and building new things.
          </p>
          <p>
            In high school I took computer engineering and programming courses
            that pushed me to learn more. I enrolled in coding classes each year
            and joined co-op placements to gain real world experience that
            connected what I learned in class to practical applications.
          </p>
          <p>
            At Toronto Metropolitan University I explored subjects such as
            mathematics, computer architecture and system organization. My
            favorite classes continue to be the coding courses where I feel the
            most inspired to create.
          </p>
          <p>
            Even during the years when I had to lower my course load to focus on
            my health I stayed connected to my passion by working on personal
            projects which are featured below.
          </p>
        </div>

        <div class="row d-flex justify-content-evenly" id="experiences">
          <div class="col-6">
            <img
              src="images/room.jpg"
              alt="room"
              class="img-fluid"
              style="border-radius: 5px; margin-bottom: 10px"
            />
            <p style="font-weight: bold">
              Eeshani Guest Inn
              <br />
              2016-2024
            </p>

            <p>Junior Developer/Automation Support/IT Support</p>
            <ul>
              <li>
                Developed an AI-powered Python automation tool that reduced
                customer email response time by over 50%
              </li>
              <li>
                Provided technical support to 8+ remote users, resolving 100+
                recurring cross-platform issues across Windows and Linux
              </li>
              <li>
                Created 10+ setup and troubleshooting guides to streamline
                onboarding and reduce support load
              </li>
              <li>
                Maintained 15+ devices with scheduled updates and proactive
                troubleshooting, resulting in 99% system uptime
              </li>
            </ul>
          </div>
          <div class="col-6">
            <img
              src="images/coding.jpg"
              alt="laptop with coding languages"
              class="img-fluid"
              style="border-radius: 5px; margin-bottom: 10px"
            />
            <br />
            <p style="font-weight: bold">
              SAP Canada
              <br />
              2018-2019
            </p>

            <p>Junior Programmer</p>
            <ul>
              <li>
                Built and demoed two internal tools: a real-time
                Arduino-integrated event scoring system and a web-based
                Raspberry Pi car controller
              </li>
              <li>
                Identified and resolved 40+ software bugs during active sprints
                and assisted with QA documentation
              </li>
              <li>
                Created clear, maintainable documentation that supported
                cross-functional teams and new hires
              </li>
            </ul>
          </div>
        </div>

        <div style="text-align: center; margin: 60px" id="skills">
          <h5>Skills</h5>
          <p style="margin: 0px 50px">
            <span style="font-weight: bold">Technical Support & Systems: </span>
            Troubleshooting, end-user training, remote setup, Windows, Linux,
            Mac OS
            <br />
            <span style="font-weight: bold">Full Stack Development: </span>HTML,
            CSS, JavaScript, Python, Java, Smalltalk, SQL, REact
            <br />
            <span style="font-weight: bold">Automation & Testing: </span>Python
            Scripting, Cypress, Selenium, Postman, REST Assured, GitHub Actions
            <br />
            <span style="font-weight: bold">Tools & Platforms:</span> Microsoft
            Azure, Git, Office 365, VS Code, Raspberry Pi, Arduino
            <br />
            <span style="font-weight: bold">Soft Skills: </span>Communication,
            collaboration, adaptability, proactive problem-solving
          </p>
        </div>
      </div>
    </main>
  );
}
