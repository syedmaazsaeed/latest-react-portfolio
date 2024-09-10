import React from 'react'
import './Testimonials.css' ;
import avatar1 from '../../assets/me.jpg';
import avatar2 from '../../assets/three.jpeg';
import avatar3 from '../../assets/three.jpeg';
import avatar4 from '../../assets/three.jpeg';

const data = [

  {avatar: avatar1,
    name: 'James Sunaty',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar1,
    name: 'Tonny James',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar1,
    name: 'Ich bin silwa',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar1,
    name: 'Hashir hussain',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },
  {avatar: avatar1,
    name: 'Ali Singh',
    review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.'
  },


]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

         <div className="container testimonials__container">
            
            {
              data.map(({avatar, name, review}, index) => {

                return (
                  <article key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar}  />             
                </div>
                <h5 className='client__name'>
                      {name}
                    </h5>
                    <small className='client__review'>
                      {review}
                    </small>
            </article>
                )
              })
            }
 
         </div>


    </section>
  )
}

export default Testimonials
