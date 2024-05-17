import React from "react";
import "./MedicalSpecialists.css"; // Importing CSS file for styling
import doctor1 from "../../components/frontend/dr6.jpg";
import doctor2 from "../../components/frontend/dr7.jpg";
import doctor3 from "../../components/frontend/dr8.jpg";
import doctor4 from "../../components/frontend/dr9.jpg";

const MedicalSpecialists = () => {
  const googleformlink =
    "https://docs.google.com/forms/d/e/1FAIpQLSciqL-AfU0NFwIxoUijkkgI5IoSjrYzmbva-M2d3-15eeDe8Q/viewform?embedded=true";
  return (
    <div className="medical-specialists">
      <h2 className="main-heading">
        <b>Our Medical Specialists</b>
      </h2>
      <div className="specialists-container">
        <div className="specialist">
          <img src={doctor1} alt="Doctor 1" />
          <h3>Dr. John Doe</h3>
          <p>General Practitioner</p>
          <a href={googleformlink} target="_blank" rel="noopener noreferrer">
            <button className="appointment-button">Make an Appointment</button>
          </a>
          
        </div>
        <div className="specialist">
          <img src={doctor2} alt="Doctor 2" />
          <h3>Dr. Jane Smith</h3>
          <p>Cardiologist</p>

          <a href={googleformlink} target="_blank" rel="noopener noreferrer">
            <button className="appointment-button">Make an Appointment</button>
          </a>
        </div>
        <div className="specialist">
          <img src={doctor3} alt="Doctor 3" />
          <h3>Dr. Michael Johnson</h3>
          <p>Neurologist</p>

          <a href={googleformlink} target="_blank" rel="noopener noreferrer">
            <button className="appointment-button">Make an Appointment</button>
          </a>
        </div>
        <div className="specialist">
          <img src={doctor4} alt="Doctor 4" />
          <h3>Dr. Sarah Brown</h3>
          <p>Pediatrician</p>

          <a href={googleformlink} target="_blank" rel="noopener noreferrer">
            <button className="appointment-button">Make an Appointment</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedicalSpecialists;
