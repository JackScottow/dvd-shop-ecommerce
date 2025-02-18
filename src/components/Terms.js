import "../Css/Terms.css";
import React from "react";

const Terms = () => {
  document.title = "Terms of Use";

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms of Use</h1>
      </div>

      <div className="terms-section">
        <h2>Welcome to DVDShop.com</h2>
        <p>These terms and conditions outline the rules and regulations for the use of DVDShop.com's website. By accessing this website, we assume you accept these terms and conditions in full.</p>
      </div>

      <div className="terms-section">
        <h2>License to Use</h2>
        <p>Unless otherwise stated, DVDShop.com and/or its licensors own the intellectual property rights for all material on DVDShop.com. All intellectual property rights are reserved.</p>

        <div className="terms-highlight">
          <h3>You must not:</h3>
          <ul>
            <li>Republish material from DVDShop.com</li>
            <li>Sell, rent, or sub-license material from DVDShop.com</li>
            <li>Reproduce, duplicate, or copy material from DVDShop.com</li>
            <li>Redistribute content from DVDShop.com</li>
          </ul>
        </div>
      </div>

      <div className="terms-section">
        <h2>Product Information</h2>
        <p>We strive to provide accurate product information and pricing. However, pricing and availability information is subject to change without notice.</p>
        <h3>Pricing and Payment</h3>
        <ul>
          <li>All prices are listed in GBP (£)</li>
          <li>Prices are subject to change without notice</li>
          <li>We accept major credit cards and PayPal</li>
          <li>Payment is required at time of purchase</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>Shipping and Delivery</h2>
        <p>We aim to process and ship orders within 1-2 business days. Delivery times may vary depending on your location and chosen shipping method.</p>
        <h3>Delivery Options</h3>
        <ul>
          <li>Standard Delivery (3-5 business days)</li>
          <li>Express Delivery (1-2 business days)</li>
          <li>International Shipping (7-14 business days)</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>Returns and Refunds</h2>
        <p>We accept returns within 30 days of purchase. Items must be unused and in their original packaging.</p>
        <div className="terms-highlight">
          <p>Please note that shipping costs for returns are the responsibility of the customer unless the item received was defective or incorrect.</p>
        </div>
      </div>

      <div className="terms-section">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at <a href="mailto:terms@dvdshop.com">terms@dvdshop.com</a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
