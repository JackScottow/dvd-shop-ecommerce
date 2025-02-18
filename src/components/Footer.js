import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul className="d-flex justify-content-center list-unstyled">
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Use</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <p className="footer-copyright text-center">© 2024 DVDShop.com. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
