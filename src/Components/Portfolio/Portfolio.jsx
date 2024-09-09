import React from 'react'
import './Portfolio.css';
import Github from '../../assets/Github.png';
import WeatherApp from '../../assets/weather-project.png';
import NoteVault from '../../assets/notevault.png';
import NewsPulse from '../../assets/newspulse.png';
import MovieApp from '../../assets/movieapp.png';
import TextWizard from '../../assets/textwizard.png';
import EcommerceStore from '../../assets/ecommerceStore.jpg';
import TechfolioReact from '../../assets/react-techfolio.png';
import SimpleResume from '../../assets/resume.png';




const data = [

   {
      id: 1,
      image: Github,
      title: 'Github-CodeSource-FullStack-App',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 2,
      image: WeatherApp,
      title: 'ForecastFusion-Weather-App',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 3,
      image: NoteVault,
      title: 'NoteVaultPro-MernApp',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 4,
      image: NewsPulse,
      title: 'React-NewsPulse-App',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 5,
      image: MovieApp,
      title: 'React-Movie-Search',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 6,
      image: TextWizard,
      title: 'ReactJS-WordCounter',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 7,
      image: EcommerceStore,
      title: 'EcommerceShopifyStore-reactApp',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 8,
      image: TechfolioReact,
      title: 'Techfolio-React ',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 9,
      image: SimpleResume,
      title: 'Github-CodeSource-FullStack-App',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
         {
            data.map(({id, image, title, github, demoLink}) => {
               return (
                  <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
             
             <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>

          <div className="portfolio__item-cta">     

         <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>


         </article>
               )
            })
         }
     
      </div>
    </section>
  )
}

export default Portfolio




















// import React from 'react'
// import './Portfolio.css'

// const Portfolio = () => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Project One',
//       description: 'A brief description of Project One goes here. It is a great project that solves a specific problem.',
//       image: 'https://via.placeholder.com/300x200', // Placeholder image
//       link: '#'
//     },
//     {
//       id: 2,
//       title: 'Project Two',
//       description: 'This project tackles a different issue and uses cutting-edge technologies.',
//       image: 'https://via.placeholder.com/300x200',
//       link: '#'
//     },
//     {
//       id: 3,
//       title: 'Project Three',
//       description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
//       image: 'https://via.placeholder.com/300x200',
//       link: '#'
//     },
//     {
//       id: 4,
//       title: 'Project Three',
//       description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
//       image: 'https://via.placeholder.com/300x200',
//       link: '#'
//     },
//     {
//       id: 5,
//       title: 'Project Three',
//       description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
//       image: 'https://via.placeholder.com/300x200',
//       link: '#'
//     },
//     {
//       id: 6,
//       title: 'Project Three',
//       description: 'Project Three is an innovative solution with a unique approach to problem-solving.',
//       image: 'https://via.placeholder.com/300x200',
//       link: '#'
//     }
//   ];

//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {projects.map(({ id, title, description, image, link }) => (
//           <article key={id} className='portfolio__item'>
//             <div className="portfolio__item-image">
//               <img src={image} alt={title} />
//             </div>
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>View Project</a>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Portfolio

