import "../Css/Privacy.css";
import React from "react";

const Privacy = () => {
  document.title = "Privacy Policy";

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
      </div>

      <div className="privacy-section">
        <h2>Introduction</h2>
        <p>At DVDShop.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
      </div>

      <div className="privacy-section">
        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>We may collect personal identification information from users in various ways, including, but not limited to:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Billing and shipping address</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment details</li>
        </ul>

        <h3>Usage Data</h3>
        <p>We may also collect information about how the website is accessed and used. This usage data may include:</p>
        <ul>
          <li>Your computer's IP address</li>
          <li>Browser type and version</li>
          <li>Pages you visit</li>
          <li>Time and date of your visit</li>
          <li>Time spent on pages</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>How We Use Your Information</h2>
        <p>We use the collected data for various purposes:</p>
        <ul>
          <li>To process and fulfill your orders</li>
          <li>To send you order confirmations and updates</li>
          <li>To provide customer support</li>
          <li>To send you marketing and promotional communications (with your consent)</li>
          <li>To improve our website and services</li>
          <li>To protect against fraudulent transactions</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
      </div>

      <div className="privacy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@dvdshop.com">privacy@dvdshop.com</a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
