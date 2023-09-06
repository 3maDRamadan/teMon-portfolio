import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        TeMoOoN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
        <li>
          <a href="#contact"> contact </a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <AiOutlineInstagram />
        </a>
        <a href="">
          <AiOutlineWhatsApp />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; TeMoOoN. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
