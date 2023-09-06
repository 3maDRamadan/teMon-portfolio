import React from "react";
import "./services.css";
import { BiCheckDouble } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}
        <article className="service">
          <div className="service-head">
            <h3>web development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF web development */}
        <article className="service">
          <div className="service-head">
            <h3>content creation</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheckDouble className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF content creation*/}
      </div>
    </section>
  );
};

export default Services;
