import React from 'react'
import './Testimonials.css' ;
import avatar1 from '../../assets/me.jpg';
import avatar2 from '../../assets/three.jpeg';
import avatar3 from '../../assets/three.jpeg';
import avatar4 from '../../assets/three.jpeg';


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

         <div className="container testimonials__container">
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avatar1} alt="Avatar 1" />             
                </div>
                <h5 className='client__name'>
                      Ernest Achiever
                    </h5>
                    <small className='client__review'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.
                    </small>
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avatar1} alt="Avatar 1" />             
                </div>
                <h5 className='client__name'>
                      Ernest Achiever
                    </h5>
                    <small className='client__review'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.
                    </small>
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avatar1} alt="Avatar 1" />             
                </div>
                <h5 className='client__name'>
                      Ernest Achiever
                    </h5>
                    <small className='client__review'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro quae vel voluptatem facilis? Temporibus a est quos cumque, tempore, recusandae ipsa ullam consequatur quaerat corrupti provident voluptatem sint sunt.
                    </small>
            </article>

         </div>


    </section>
  )
}

export default Testimonials
