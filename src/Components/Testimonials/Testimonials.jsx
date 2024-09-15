import React from 'react'
import './Testimonials.css' ;
import avatar1 from '../../assets/zeeshan-mukhtar.jpg';
import avatar2 from '../../assets/Ali-Qureshi.jpeg'
import avatar3 from '../../assets/avatar1.svg';
import avatar4 from '../../assets/avatar4.png';
import avatar5 from '../../assets/avatar5.png';
import avatar6 from '../../assets/avatar6.png';

import {Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [

  {avatar: avatar1,
    name: 'Zeeshan Mukhtar',
    review: 'I highly recommend Maaz. As his React and JavaScript instructor at CodeLab, he grasped concepts quickly, solved problems creatively, and collaborated well. A talented developer to watch! He is a talented developer with a bright future.'
  },
  {avatar: avatar2,
    name: 'Ali Qureshi',
    review: 'Syed Maaz Saeed is a highly skilled Front-End Developer and React-Redux Developer. His proficiency with MERN stack services, frontend programming, React, and Redux has been invaluable to the success of our projects. His dedication to delivering high-quality solutions and his ability to work effectively in collaborative environments make him a valuable asset to any team.'
  },
  {avatar: avatar3,
    name: 'Ich bin silwa',
    review: 'Syed Maaz Saeed has an excellent work ethic and a deep understanding of frontend technologies. His attention to detail and ability to meet deadlines make him a reliable developer. I’ve enjoyed collaborating with him and look forward to future projects'
  },
  {avatar: avatar4,
    name: 'Ali Singh',
    review: 'Syed Maaz Saeed’s dedication to excellence sets him apart. His proficiency in both frontend and backend technologies, coupled with his collaborative mindset, makes him a key contributor to any team. A truly exceptional software engineer.'
  },
  {avatar: avatar5,
    name: 'John Mehta',
    review: ' Working with Maaz has been a pleasure. His command over React.js and Redux is remarkable. He consistently delivers quality work, and his problem-solving skills have helped us overcome many challenges in our development process.'
  },
  {avatar: avatar6,
    name: 'Tony james',
    review: 'Syed Maaz Saeed is a dedicated and innovative developer. His approach to solving complex problems and his collaborative spirit have significantly improved the quality of our projects. His expertise in the MERN stack is evident in every solution he provides.'
  },


]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

         <Swiper className="container testimonials__container"

         // install Swiper modules
      modules={[ Pagination, Autoplay ]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 4000 }} 

      pagination={{ clickable: true }}
         >
            
            {
              data.map(({avatar, name, review}, index) => {

                return (
                  <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar}  alt={`Avatar of ${name}`}/>             
                </div>
                <h5 className='client__name'>
                      {name}
                    </h5>
                    <small className='client__review'>
                      {review}
                    </small>
            </SwiperSlide>
                )
              })
            }
 
         </Swiper>


    </section>
  )
}

export default Testimonials
