// import React from 'react';
// import './Services.css';

// const Services = () => {
//   return (
//     <section id='services'>
//       Services Section
//     </section>
//   )
// }

// export default Services


import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>MERN Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>Building full-stack applications using MongoDB, Express.js, React, and Node.js.</li>
            <li>RESTful API development with Express.js and Node.js.</li>
            <li>Responsive web design and performance optimization.</li>
            <li>Integrating third-party APIs and microservices.</li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>React Development</h3>
          </div>
          <ul className="service__list">
            <li>Creating dynamic user interfaces with React.js.</li>
            <li>State management using Context API and Redux.</li>
            <li>Reusable component creation for modular design.</li>
            <li>Implementing advanced hooks (useEffect, useState, etc.).</li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Node.js & Express.js</h3>
          </div>
          <ul className="service__list">
            <li>Backend development with Node.js and Express.js.</li>
            <li>API development and middleware integration.</li>
            <li>Building secure and scalable server-side applications.</li>
            <li>Real-time communication using WebSockets.</li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Flutter Development</h3>
          </div>
          <ul className="service__list">
            <li>Developing cross-platform mobile apps using Flutter & Dart.</li>
            <li>Creating smooth, high-performance UIs.</li>
            <li>State management in Flutter using Provider and Riverpod.</li>
            <li>Integration with Firebase and other backends.</li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>C# Development</h3>
          </div>
          <ul className="service__list">
            <li>Building robust applications with C# and .NET.</li>
            <li>Object-oriented programming and design patterns.</li>
            <li>Desktop and web application development.</li>
            <li>Integration with SQL databases.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
