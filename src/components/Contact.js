import React from "react";
import "../Css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  document.title = "Contact Us";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required placeholder="How can we help?" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Please describe your inquiry..." />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <div className="contact-details">
          <div className="contact-detail-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>support@dvdshop.com</p>
          </div>

          <div className="contact-detail-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>+44 (0) 123 456 7890</p>
          </div>

          <div className="contact-detail-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <p>123 DVD Street, London, UK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
