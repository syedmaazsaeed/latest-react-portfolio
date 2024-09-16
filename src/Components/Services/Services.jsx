import React from 'react';
import './Services.css';
import { IoShieldCheckmarkSharp } from "react-icons/io5";


const Services = () => {



  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      {/* Services Section */}
      <div className="container services__container">

        {/* Programmer Service */}
        <article className="service">
          <div className="service__head">
            <h3>Programmer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Proficient in solving complex problems using <b>JavaScript, C++, and C#</b>, with a focus on algorithms, data structures, and system design.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Experienced in competitive programming, actively solving challenges on platforms like <a href="https://leetcode.com/u/syedmuhammadmaaz/" target='_blank' rel="noreferrer">LeetCode</a> to sharpen my problem-solving skills.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Developing efficient algorithms for real-world problems, optimized for performance and scalability.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Check out my <a href="https://github.com/syedmaazsaeed" target='_blank' rel="noreferrer">GitHub</a> for hands-on projects involving algorithm development, API integration, and innovative solutions.</p>
            </li>
          </ul>
        </article>

        {/* Web Development Service */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Specialist in full-stack web development using the <b>MERN Stack (MongoDB, Express, React, Node.js)</b>, building scalable, high-performance applications.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Proficient in <b>React.js</b>, creating dynamic, responsive front-end interfaces, optimized for speed and user experience.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Building interactive, mobile-first web apps with React.js is where I shine. I focus on delivering polished, responsive experiences that users love.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Familiar with <b>responsive design</b> principles, focusing on mobile-first development and cross-browser compatibility for optimal user experiences.</p>
            </li>
            
          </ul>
        </article>

        {/* Software Development Service */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Experienced in full-stack software development, from design to deployment, ensuring adherence to <b>Agile</b> methodologies and <b>DevOps</b> best practices.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Proficient in debugging, testing, and maintaining high-quality code with a focus on performance optimization and scalability.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Collaborated on open-source projects, contributing to a vibrant developer community. Check out my work on <a href="https://github.com/syedmaazsaeed" target='_blank' rel="noreferrer">GitHub</a>.</p>
            </li>
          </ul>
        </article>

        {/* AI and Machine Learning Service */}
        <article className="service">
          <div className="service__head">
            <h3>AI & Machine Learning</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Exploring AI and ML technologies to integrate smart, data-driven solutions into web and mobile applications.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>Skilled in building predictive models and using machine learning techniques to enhance functionality and user experience.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>AI is the future, and I’m all about integrating it into modern apps. From predictive analytics to machine learning, I aim to make apps smarter and more efficient.</p>
            </li>
            <li>
              <IoShieldCheckmarkSharp className='service__list-icon' />
              <p>I focus on using AI and Machine Learning to build predictive models that make applications not just responsive but intelligent.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services;
