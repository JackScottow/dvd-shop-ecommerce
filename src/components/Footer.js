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
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
      </ul>
      <p>
        <a href="/privacy">Privacy Policy </a> | <a href="/termsofuse">Terms of Use</a>
      </p>
      <p>Copyright 2022</p>
    </footer>
  );
};

export default Footer;
