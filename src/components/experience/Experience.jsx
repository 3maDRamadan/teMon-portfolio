import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>whay skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>frontend development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}

        <div className="experience-backend">
          <h3>backend development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className = "experience-details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
