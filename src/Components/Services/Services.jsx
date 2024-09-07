import React from 'react';
import './Services.css';
import { IoShieldCheckmarkSharp } from "react-icons/io5";


const Services = () => {

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
     
     <div className="container services__container">

      <article className="service">

        <div className="service__head">
          <h3>Programmer</h3>
        </div>

        <ul className='service__list'>
          <li>
          <IoShieldCheckmarkSharp className='service__list-icon' />
          <p>
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          </li>
          <li>
          <IoShieldCheckmarkSharp className='service__list-icon' />
          <p>
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          </li>
          <li>
          <IoShieldCheckmarkSharp className='service__list-icon' />
          <p>
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          </li>
          <li>
          <IoShieldCheckmarkSharp className='service__list-icon' />
          <p>
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          </li>
          <li>
          <IoShieldCheckmarkSharp className='service__list-icon' />
          <p>
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          </li>
          
        </ul>
      </article>

      {/* Website Development */}

      <article className="service">

<div className="service__head">
  
  <h3>Web Development</h3>
</div>

<ul className='service__list'>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  
</ul>
</article>

<article className="service">

<div className="service__head">
  <h3>Software Development</h3>
</div>

<ul className='service__list'>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
  <li>
  <IoShieldCheckmarkSharp className='service__list-icon' />
  <p>
    Lorem ipsum dolor sit amet consectetur elit.
  </p>
  </li>
</ul>
</article>

{/* END Of Software Development */}

     </div>
    </section>
  )
}

export default Services



