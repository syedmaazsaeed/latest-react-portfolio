import React from 'react'
import CV from '../../assets/SyedMaaz-Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Inspect CV</a>
        <a href="#contact" className='btn btn-primary btn-swing'>Let's Talk</a>
      
    </div> 
  )
}

export default CTA
