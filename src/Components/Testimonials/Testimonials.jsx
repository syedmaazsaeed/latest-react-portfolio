import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id='testimonials'>
      <h5>What Our Clients Say</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Slider {...settings}>
          <div className="testimonial">
            <div className="client__avatar">
              <img src="https://via.placeholder.com/150" alt="Client Avatar" />
            </div>
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">
              "Syed Maaz Saeed provided exceptional service and created an outstanding web app for my company. His professionalism and coding skills are top-notch. Highly recommended!"
            </small>
          </div>
          <div className="testimonial">
            <div className="client__avatar">
              <img src="https://via.placeholder.com/150" alt="Client Avatar" />
            </div>
            <h5 className="client__name">Jane Smith</h5>
            <small className="client__review">
              "The mobile app development was smooth and efficient. Syed's expertise in Flutter made the process seamless and the final product was just what we needed."
            </small>
          </div>
          <div className="testimonial">
            <div className="client__avatar">
              <img src="https://via.placeholder.com/150" alt="Client Avatar" />
            </div>
            <h5 className="client__name">Alex Johnson</h5>
            <small className="client__review">
              "Working with Syed on a full-stack project was a great experience. He is detail-oriented, communicates well, and delivers on time. Highly recommend him for MERN stack development."
            </small>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
