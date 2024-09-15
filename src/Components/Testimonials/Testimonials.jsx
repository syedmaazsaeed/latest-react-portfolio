import React from 'react'
import './Testimonials.css' ;
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg'
import avatar3 from '../../assets/avatar3.png';
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
    name: 'James Sunaty',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar2,
    name: 'Tonny James',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar3,
    name: 'Ich bin silwa',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar4,
    name: 'Ali Singh',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar5,
    name: 'John Mehta',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar6,
    name: 'Tony james',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
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
                    <img src={avatar}  />             
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
