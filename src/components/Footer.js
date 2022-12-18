import "../Css/Footer.css";
import React from "react";
import { faGithub, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/JackScottow">
            <FontAwesomeIcon icon={faGithub} /> <div className="footer-text">GitHub</div>
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} /> <div className="footer-text">Facebook</div>
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} /> <div className="footer-text">Instagram</div>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} /> <div className="footer-text">Twitter</div>
          </a>
        </li>
      </ul>
      <div>
        <a href="/privacy">Privacy Policy </a> | <a href="/termsofuse">Terms of Use</a>
      </div>
      <div>Copyright 2022</div>
    </footer>
  );
};

export default Footer;
