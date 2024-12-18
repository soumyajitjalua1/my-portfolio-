import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';  // Importing Font Awesome icons
import "./ContuctMe.css"
const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className='Big-contact-background'>Contact Me</div>
      <h2 className="contact-header">Contact Me</h2>
      <div className="contact-info">
        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3>Address</h3>
            <p>IIIT Lucknow, Lucknow, Uttar Pradesh, 226002</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaPhone className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 9732591634</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>soumyajitjalua@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
