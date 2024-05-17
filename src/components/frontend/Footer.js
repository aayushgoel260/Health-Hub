// Footer.js

import React, { useState } from 'react';
import './Footer.css';
import dr from "../../components/frontend/dr1.png";

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message submitted:', message);
    // Clear the message box
    setMessage('');
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Health Hub</h3>
        <p>A platform for all your healthcare needs.</p>
        <p>Contact us: def905144@gmail.com | 9876543210</p>
      </div>
      <div className="footer-center">
        <img src={dr} alt="Healthcare Logo" />
      </div>
      <div className="footer-right">
        <p>Feel free to ask us</p>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
