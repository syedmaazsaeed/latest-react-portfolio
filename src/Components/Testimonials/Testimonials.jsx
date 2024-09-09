import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    review: "Syed Maaz Saeed provided exceptional service and created an outstanding web app for my company. His professionalism and coding skills are top-notch. Highly recommended!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    review: "The mobile app development was smooth and efficient. Syed's expertise in Flutter made the process seamless and the final product was just what we needed.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Alex Johnson",
    review: "Working with Syed on a full-stack project was a great experience. He is detail-oriented, communicates well, and delivers on time. Highly recommend him for MERN stack development.",
    image: "https://via.placeholder.com/150"
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What Our Clients Say</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial__card">
            <div className="testimonial__card-inner">
              <div className="testimonial__card-front">
                <img src={testimonial.image} alt={`${testimonial.name}'s Avatar`} className="testimonial__image" />
                <h3 className="testimonial__name">{testimonial.name}</h3>
              </div>
              <div className="testimonial__card-back">
                <p className="testimonial__review">{testimonial.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;




