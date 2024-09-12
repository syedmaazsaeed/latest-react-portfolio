import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { SiBuymeacoffee } from "react-icons/si";



 

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SyedMaazSaeed</a>

      <ul className='permalinks'>
        <li><a href="#">Home </a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Portfolio">Portfolio </a></li>
        <li><a href="#testimonials ">Testimonials </a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebook /> </a>
        <a href="https://instagram.com"> <FaInstagram/> </a>
        <a href="https://twitter.com"> <FaSquareXTwitter /> </a>
        <a href="https://github.com"> <FaGithub /> </a>
        <a href="https://linkedin.com"> <IoLogoLinkedin /> </a>
        <a href="https://upwork.com"> <FaSquareUpwork /> </a>
        <a href="https://fiver.com"> <SiFiverr /> </a>
        <a href="https://buymeacoffee.com/syedmaazsaeed0" target="_blank" > <SiBuymeacoffee/> </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Syed Maaz Saeed All rights reserved.
        </small>
      </div>
    </footer>
  )
}
export default Footer




















// import React from 'react';
// import './Footer.css';
// import Experience from './../Experience/Experience';
// import About from './../About/About';

// const Footer = () => {
//   return (
//     <footer id='footer'>
//       <div className="container footer__container">
//         <h2 className="footer__title">Contact Me</h2>
//         <p className="footer__description">
//           I'm always open to new opportunities and collaborations. Feel free to reach out!
//         </p>

//         <div className="footer__links">
//           <a href="mailto:sohaib.ahmed.work@gmail.com" className="footer__link">Email</a>
//           <a href="https://www.linkedin.com/in/syed-maaz-saeed" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
//           <a href="https://github.com/SyedMaazSaeed" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
//         </div>

//         <p className="footer__copy">
//           &copy; {new Date().getFullYear()} Syed Maaz Saeed. All rights reserved.@Developer
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

