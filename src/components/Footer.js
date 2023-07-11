import React from "react";
import "./MemeGenerator.css"; // Uncomment this line if you have a separate CSS file

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer--list">
        <li className="footer--item">
          <a
            href="https://github.com/raviiiyadav?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="footer--item">
          <a
            href="https://linkedin.com/in/raviiiyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="footer--item">
          <a
            href="https://leetcode.com/raviiyadav__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </li>
        <li className="footer--item">
          <a
            href="mailto:raviiyadav.job@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
