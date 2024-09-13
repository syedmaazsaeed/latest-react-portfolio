import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiFiverr, SiBuymeacoffee } from 'react-icons/si';


const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      id="footer"
      className="footer"
    >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      
      <div className="footer__text__container">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://facebook.com">
              <FaFacebook />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://instagram.com">
              <FaInstagram />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com">
              <FaSquareXTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://github.com">
              <FaGithub />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://linkedin.com">
              <IoLogoLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://fiverr.com">
              <SiFiverr />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://buymeacoffee.com/syedmaazsaeed0">
              <SiBuymeacoffee />
            </a>
          </li>
        </ul>

        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#about">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#experience">
              Experience
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#services">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <p className="copyright">
        &copy;2024 Syed Maaz Saeed | All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;





