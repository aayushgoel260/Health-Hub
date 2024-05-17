// FreeConsultationPage.js

import React from 'react';
import './GetFree.css'; // Import CSS file for styling

const FreeConsultationPage = () => {
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeiNbvjt8Ie8jWmPIqPvt5UC38iSynZ8YtmRmNYh37sky8kGQ/viewform?embedded=true';
  return (
    <div className="free-consultation-page">
      <h1 className="page-heading">Get Free Consultation</h1>
      <p className="big-text">Looking for a Doctor to Get Your Services?</p>
      <div className="get-started-container">
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          <button className="get-started-button">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default FreeConsultationPage;
