import React, { useState } from 'react';
import './ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
const ContactUs = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };
  const contactsubmit=()=>{
    toast.info("Thanks for your responce  ")
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // Clear form fields after submission
    setFormData(initialFormData);
  };
  
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Feel Free To ContactUs:</p>
        <div className="contact-details">
          <div className="contact-item">
            <span>Contact Number:</span>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <span>Email:</span>
            <p>def905144@gmail.com</p>
          </div>
          <div className="contact-item">
            <span>Address:</span>
            <p>123 Rajpura, Punjab</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name:</label><br/><br/>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name' required />
          </div>
          <div className="form-group">
            <label>Email:</label><br/><br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange}  placeholder='Fill Email' required />
          </div>
          <div className="form-group">
            <label>Message:</label><br/><br/>
            <textarea name="message" value={formData.message} onChange={handleChange}   placeholder='Drop Your Message'required></textarea>
          </div>
          <button onClick={contactsubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
