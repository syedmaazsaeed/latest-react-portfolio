import React from 'react'
import './About.css';
import { useState } from 'react';
import ME from '../../assets/two.jpeg';
import ME2 from '../../assets/image1.jpg'; 
import ME3 from '../../assets/image2.jpg'; 
import ME4 from '../../assets/image3.jpg'; 
import { FaAward } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";


const About = () => {
  // { // Array of images }
  const images = [ME, ME2, ME3, ME4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle hover and change the image

  const handleImageHover = () => {

    
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="maaz">
    <section id='about'>
     
      <h5>Get To Know Me</h5>
      <h2>My Journey</h2>
     
      <div className="container about__container">
        <div className="about__me">
          
        <div className="about__me-image" onMouseEnter={handleImageHover}>

        <img src={images[currentImageIndex]} alt="About Image" />


          </div>
        </div>

        <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
        <FaAward  className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years of Hands-On Coding</small>


        </article>
        <article className='about__card'>
        <HiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>Global Network of Satisfied Clients</small>


        </article>
        <article className='about__card'>
        <FaCircleCheck className='about__icon'/>
          <h5>Delivered Projects</h5>
          <small>Global Project Completion</small>


        </article>
       </div>

       <p>
           Hi Everyone, I am Syed Maaz Saeed from Bahawalpur, Pakistan.
          I am currently Working as a MERN Stack Technology.As a self-taught Front-End Developer | React Developer I specialize in modern web technologies, including React Node Express JS and MongoDB.I have completed (ICS) in Maths and Computer at Superior Group of College Bahawalpur.
          I am currently delving deep into the field of software engineering at the Islamia University of Bahawalpur, where I am eager to explore the new technological era and stay consistently updated to remain at the forefront of innovation and development.
       </p>

       <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>

    </section>
    </div>
    


  )
}

export default About
