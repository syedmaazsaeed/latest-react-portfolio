import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from "react-icons/bs";



const Experience = () => {



  return (
    <section id='experience' >
      
      <h5>What Skills I Have</h5>
      <h2>My Work Experience</h2>

      <div className="container experience__container">
        {/* FrontEnd Skills  */}
        <div className="experience__frontend">
          <h3>Main Expertise & Coding Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>HTML5</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>JavaScript</h4>
           <small className='text-light'>Expert</small>
           </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>React JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Express JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Next JS</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Git & Github</h4>
            <small className='text-light'>Expert</small>
            </div>
            </article>
          </div>

          
        </div>
        {/* Backend Skills  */}
        <div className="experience__backend">

        <h3>Additional Skills & Programming Languages</h3>
         
        <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>VScode</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>TypeScript</h4>
             <small className='text-light'>Known</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Linux</h4>
            <small className='text-light'>Fundamentals</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>MongoDB </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>NPM/Yarn</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div> 
            <h4>Oracle</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div> 
            <h4>Canva</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div> 
            <h4>Netlify/Vercel</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div> 
            <h4>Flutter</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
