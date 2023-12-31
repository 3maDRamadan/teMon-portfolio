import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Emad Ramadan</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#about" className="scroll_down">
          Scroll down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
