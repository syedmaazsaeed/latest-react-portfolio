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
        &copy;2024 Syed Maaz Saeed | All Rights Reserved
      </p>
    </motion.footer>
  );
};

export default Footer;







import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollProgressBar from './Components/ScrollProgressbar/ScrollProgressBar';
import SkillsChart from './Components/SkillsChart/SkillsChart'; // Import the SkillsChart component

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <Nav />
      <About />
      <Experience />
      <SkillsChart /> {/* Add the SkillsChart component here */}
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;



// src/Components/TestimonialsCarousel/TestimonialsCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './TestimonialsCarousel.css';

const testimonials = [
  { name: 'John Doe', feedback: 'Great work!', company: 'Company A' },
  { name: 'Jane Smith', feedback: 'Amazing experience!', company: 'Company B' },
  // Add more testimonials
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimony, index) => (
        <div key={index} className="testimonial-slide">
          <p>{testimony.feedback}</p>
          <h4>{testimony.name}</h4>
          <small>{testimony.company}</small>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsCarousel;


2. Project Showcases with Live Demos
Add interactive project showcases with live demos or previews. This can be done by integrating interactive iframes or modals with live demos.

Code Example for a Modal Project Showcase:

jsx