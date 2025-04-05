import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';  // Import icons from React Icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 AWIN Web Developer.</p>
        <div className="social-links">
      <a
        href="https://www.linkedin.com/in/marwin-paul-olivar-694311327/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="mailto:olivarmarwin81@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="email"
      >
        <FaEnvelope size={30} />
      </a>
      <a
        href="https://www.facebook.com/MarwinPaulOlivar"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebook size={30} />
      </a>
    </div>
      </div>
    </footer>
  );
}

export default Footer;
