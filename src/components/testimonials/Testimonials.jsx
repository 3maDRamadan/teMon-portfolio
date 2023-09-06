import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avatar: AVATAR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit temporibus impedit in? Velit tenetur, iste admolestiae quo quasi quidem vitae! Sed quaerat eveniet solutadolores nisi eaque sint nemo.",
    },
    {
      avatar: AVATAR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit temporibus impedit in? Velit tenetur, iste admolestiae quo quasi quidem vitae! Sed quaerat eveniet solutadolores nisi eaque sint nemo.",
    },
    {
      avatar: AVATAR3,
      name: "Snow White",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit temporibus impedit in? Velit tenetur, iste admolestiae quo quasi quidem vitae! Sed quaerat eveniet solutadolores nisi eaque sint nemo.",
    },
    {
      avatar: AVATAR4,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit temporibus impedit in? Velit tenetur, iste admolestiae quo quasi quidem vitae! Sed quaerat eveniet solutadolores nisi eaque sint nemo.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>review from clients</h5>
      <h2>testimonials</h2>


      <Swiper
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      
      className="  container testimonials-container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client-avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
