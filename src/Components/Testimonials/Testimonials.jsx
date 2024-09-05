// import React from 'react'
// import './Testimonials.css';

// const Testimonials = () => {
//   return (
//     <section id='testimonials'> 
//       Testimonials Section
//     </section>
//   )
// }

// export default Testimonials




import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://via.placeholder.com/150" alt="Client Avatar" />
          </div>
          <h5 className="client__name">John Doe</h5>
          <small className="client__review">
            "Syed Maaz Saeed provided exceptional service and created an outstanding web app for my company. His professionalism and coding skills are top-notch. Highly recommended!"
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://via.placeholder.com/150" alt="Client Avatar" />
          </div>
          <h5 className="client__name">Jane Smith</h5>
          <small className="client__review">
            "The mobile app development was smooth and efficient. Syed's expertise in Flutter made the process seamless and the final product was just what we needed."
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://via.placeholder.com/150" alt="Client Avatar" />
          </div>
          <h5 className="client__name">Alex Johnson</h5>
          <small className="client__review">
            "Working with Syed on a full-stack project was a great experience. He is detail-oriented, communicates well, and delivers on time. Highly recommend him for MERN stack development."
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
