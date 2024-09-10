import React from 'react'
import avatar from '../../assets/';

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

         <div className="container testimonials__container">
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt="Avatar 1" />
                </div>
            </article>
         </div>


    </section>
  )
}

export default Testimonials
