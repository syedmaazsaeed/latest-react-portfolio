import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images for the testimonials
import image1 from '../../assets/me.jpg';
import image2 from '../../assets/me.jpg';
import image3 from '../../assets/me.jpg';

SwiperCore.use([Autoplay, Pagination]);

const testimonials = [
  {
    name: "John Doe",
    review: "Syed Maaz Saeed is a remarkable developer with outstanding skills. His work ethic and ability to deliver exceptional results are unmatched. Highly recommended!",
    image: image1
  },
  {
    name: "Jane Smith",
    review: "Working with Syed has been a pleasure. His expertise in React and Flutter has brought our projects to life with great efficiency and creativity.",
    image: image2
  },
  {
    name: "Alex Johnson",
    review: "Syed's attention to detail and dedication to his craft make him a top-tier developer. His ability to handle complex projects with ease is truly impressive.",
    image: image3
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Our Clients Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
