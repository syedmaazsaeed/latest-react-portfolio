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
      github: 'https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App',
      demo: 'https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App'


   },
   {
      id: 2,
      image: WeatherApp,
      title: 'ForecastFusion-Weather-App',
      github: 'https://github.com/syedmaazsaeed/ForecastFusion-Weather-App',
      demo: 'https://forecastfusion-app.netlify.app/'


   },
   {
      id: 3,
      image: NoteVault,
      title: 'NoteVaultPro-MernApp',
      github:'https://github.com/syedmaazsaeed/NoteVaultPro-MernApp',
      demo: 'https://inotebookstore-app.netlify.app/'


   },
   {
      id: 4,
      image: NewsPulse,
      title: 'React-NewsPulse-App',
      github: 'https://github.com/syedmaazsaeed/React-NewsPulse-App',
      demo: 'https://github.com/syedmaazsaeed/React-NewsPulse-App'


   },
   {
      id: 5,
      image: MovieApp,
      title: 'React-Movie-Search',
      github: 'https://github.com/syedmaazsaeed/React-Movie-Search',
      demo: 'https://github.com/syedmaazsaeed/React-Movie-Search'


   },
   {
      id: 6,
      image: TextWizard,
      title: 'ReactJS-WordCounter',
      github: 'https://github.com/syedmaazsaeed/ReactJS-WordCounter',
      demo: 'https://mytextwizard.netlify.app/'


   },
   {
      id: 7,
      image: EcommerceStore,
      title: 'EcommerceShopifyStore-reactApp',
      github: 'https://github.com/syedmaazsaeed/EcommerceShopifyStore-reactApp',
      demo: 'https://github.com/syedmaazsaeed/EcommerceShopifyStore-reactApp'


   },
   {
      id: 8,
      image: TechfolioReact,
      title: 'Techfolio-React ',
      github: 'https://github.com/syedmaazsaeed/Techfolio-React',
      demo: 'https://github.com/syedmaazsaeed/Techfolio-React'


   },
   {
      id: 9,
      image: SimpleResume,
      title: 'Developer Portfolio',
      github: 'https://github.com/syedmaazsaeed/tech-portfolio',
      demo: 'https://syedmaazsaeed-portfolio.netlify.app/'


   },

]

const Portfolio = () => {
   return (
     <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>
       <div className="container portfolio__container">
          {
             data.map(({id, image, title, github, demo}) => {
                return (
                   <article key={id} className='portfolio__item'>
         <div className="portfolio__item-image">
            
            <img src={image} alt={title} />
         </div>
         <h3>{title}</h3>
 
         <div className="portfolio__item-cta">     
 
        <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
         <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live View</a>
 
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