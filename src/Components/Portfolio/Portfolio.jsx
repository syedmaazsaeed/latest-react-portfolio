// import React from 'react'
// import './Portfolio.css';

// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       Portfolio Section
//     </section>
//   )
// }

// export default Portfolio

import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One goes here. It is a great project that solves a specific problem.',
      image: 'https://via.placeholder.com/300x200', // Placeholder image
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This project tackles a different issue and uses cutting-edge technologies.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 4,
      title: 'Project Three',
      description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 5,
      title: 'Project Three',
      description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 6,
      title: 'Project Three',
      description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, title, description, image, link }) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>View Project</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio

