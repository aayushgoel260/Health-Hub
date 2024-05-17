import React, { useState } from "react";
import logo from "../../components/frontend/HealthHUB.png";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    if (searchQuery.trim() !== '') {
      const pages = ['home', 'about', 'contact', 'getfreeconsultant']; // Example pages/routes
      const foundPage = pages.find(page => page === searchQuery.toLowerCase());

      if (foundPage) {
        // If the page is found, navigate to that page
        navigate(`/${foundPage}`);
      } else {
        // If the page is not found, return to the homepage
        navigate('/');
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
          <b>Health Hub</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/getfreeconsultant">
                <button className="btn bg-info">Free Consultation</button>
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-1 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
