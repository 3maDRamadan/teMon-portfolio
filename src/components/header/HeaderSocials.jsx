import React from 'react';
import "./header.css";

import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {RiWhatsappFill} from "react-icons/ri"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="" target='_blank'><BsLinkedin/></a>
      <a href="" target='_blank'><FaGithub/></a>
      <a href="" target='_blank'><RiWhatsappFill/></a>
    </div>
  );
}

export default HeaderSocials;
