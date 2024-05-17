import React from "react";
import "./About.css"; // Importing CSS file for styling
import dr2 from "../../components/frontend/dr2.jpg";
import dr3 from "../../components/frontend/dr3.jpg";
import dr4 from "../../components/frontend/dr4.jpg";
import dr5 from "../../components/frontend/dr5.jpg";
const About = () => {
  return (
    <div className="working-process">
      <h2 className="main-heading">
        <b>Our Working Process</b>
      </h2>
      <div className="process-photos">
        <div className="process-photo">
          <div className="photo-wrapper">
            <img src={dr2} alt="Process 1" className="hover-effect" />
          </div>
          <div className="text-container">
            <h3 className="heading-text">Select Expert Doctor</h3>
          </div>
        </div>
        <div className="process-photo">
          <div className="photo-wrapper">
            <img src={dr3} alt="Process 2" className="hover-effect" />
          </div>
          <div className="text-container">
            <h3 className="heading-text">Make Appointment</h3>
          </div>{" "}
        </div>
        <div className="process-photo">
          <div className="photo-wrapper">
            <img src={dr4} alt="Process 3" className="hover-effect" />
          </div>
          <div className="text-container">
            <h3 className="heading-text">Get Consultants</h3>
          </div>{" "}
        </div>
        <div className="process-photo">
          <div className="photo-wrapper">
            <img src={dr5} alt="Process 4" className="hover-effect" />
          </div>
          <div className="text-container">
            <h3 className="heading-text">Get Care and Relief</h3>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
