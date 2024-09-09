import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Syed Maaz Saeed provided exceptional service and created an outstanding web app for my company. His professionalism and coding skills are top-notch. Highly recommended!",
      rating: 5,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      review: "The mobile app development was smooth and efficient. Syed's expertise in Flutter made the process seamless and the final product was just what we needed.",
      rating: 5,
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Alex Johnson",
      review: "Working with Syed on a full-stack project was a great experience. He is detail-oriented, communicates well, and delivers on time. Highly recommend him for MERN stack development.",
      rating: 5,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section id='testimonials'>
      <h5>What Our Clients Say</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial__card">
            <div className="testimonial__avatar">
              <img src={testimonial.image} alt={`${testimonial.name}'s Avatar`} />
            </div>
            <div className="testimonial__content">
              <h3 className="testimonial__name">{testimonial.name}</h3>
              <p className="testimonial__review">{testimonial.review}</p>
              <div className="testimonial__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="testimonial__rating-icon" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
