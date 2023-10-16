import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    
    <footer className="bg-amber-600">

      <ul className='permalinks text-white font-semibold'>
        <li><a href='#'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com/pronix_solutions' target='_blank'><AiFillInstagram/></a>
        <a href='https://twitter.com/PrachiKo_' target='_blank'><BsTwitter/></a>
        <a href='http://www.linkedin.com/in/pronix-solutions1508' target='_blank'> <AiFillLinkedin/> </a>
      </div>

      <div className='footer_copy'>
        <small>&copy; ProNix Solutions, 2023. All Rights Reserved.</small>
      </div>

    </footer>
 
  );
};

export default Footer;
