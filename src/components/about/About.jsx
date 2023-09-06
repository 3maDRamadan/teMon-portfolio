import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolders } from "react-icons/lu";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>about me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experiences</h5>
              <small>2 Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about-card">
              <LuFolders className="about-icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            porro placeat iste quibusdam, delectus quidem consequatur. Possimus
            doloremque hic veniam dignissimos enim mollitia, ratione eius alias
            accusamus quis beatae explicabo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
