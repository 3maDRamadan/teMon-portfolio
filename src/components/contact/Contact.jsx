import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbb5n7a",
        "template_zlhu2x8",
        form.current,
        "8y5Cf9169hsTocVu5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5 className="em">emadramadan794@gmail.com</h5>
            <a
              href="mailto:emadramadan794@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a Message
            </a>
          </article>
          <article className="contact-option">
            <LiaFacebookMessenger className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Emad Ramadan</h5>
            <a href="https://m.me/TeMo0o29/" target="_blank" rel="noreferrer">
              send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>whatsapp</h4>
            <h5>01126817977</h5>
            <a
              href="https://wa.me/01126817977"
              target="_blank"
              rel="noreferrer"
            >
              send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
