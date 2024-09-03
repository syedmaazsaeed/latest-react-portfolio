import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
 


const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>What Skills I Have</h5>
      <h2>My Work Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill />

            </article>
          </div>

          
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>


        </div>
      </div>
    </section>
  )
}

export default Experience
