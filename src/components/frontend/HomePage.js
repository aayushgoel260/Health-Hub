import React from "react";
import "./HomePage.css"; // Import your CSS file for styling
import dr1 from "../../components/frontend/dr1.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="content">
        <div className="text">
          <h2 className="main-heading-text">
            <strong>
              Your Journey To Better <p className="yellow">Health</p> Starts
              Here
            </strong>
          </h2>
          <p className="para-text">
            At health hub , we set high standard of quality , research ,and
            transparency for what we share , ensuring you have access to nothing
            but the best.
          </p>
        </div>
        <div className="image">
          <img src={dr1} alt="ima" />
        </div>
      </div>
      <div>
        <div className="buttons">
          <Link to="/medicalspecialists" className="button-primary">
            Meet Our Specialist
          </Link>
          <Link to="/login" className="button-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
