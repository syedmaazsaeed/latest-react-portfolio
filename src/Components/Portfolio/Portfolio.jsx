import React , {useState} from 'react'
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
// import HealthCareSystem from '../../assets/HealthCareSystem.png';




const data = [
   {
      id: 1,
      image: Github,
      title: 'Github-CodeSource-FullStack-App',
      github: 'https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App',
      demo: '#',
      category: 'Full Stack MERN Apps'
   },
   {
      id: 2,
      image: WeatherApp,
      title: 'ForecastFusion-Weather-App',
      github: 'https://github.com/syedmaazsaeed/ForecastFusion-Weather-App',
      demo: 'https://forecastfusion-app.netlify.app/',
      category: 'Front-End'
   },
   {
      id: 3,
      image: NoteVault,
      title: 'NoteVaultPro-MernApp',
      github:'https://github.com/syedmaazsaeed/NoteVaultPro-MernApp',
      demo: 'https://inotebookstore-app.netlify.app/',
      category: 'Full Stack MERN Apps'
   },
   {
      id: 4,
      image: NewsPulse,
      title: 'React-NewsPulse-App',
      github: 'https://github.com/syedmaazsaeed/React-NewsPulse-App',
      demo: '#',
      category: 'Front-End'
   },
   {
      id: 5,
      image: MovieApp,
      title: 'React-Movie-Search',
      github: 'https://github.com/syedmaazsaeed/React-Movie-Search',
      demo: '#',
      category: 'Front-End'
   },
   {
      id: 6,
      image: TextWizard,
      title: 'ReactJS-WordCounter',
      github: 'https://github.com/syedmaazsaeed/ReactJS-WordCounter',
      demo: 'https://mytextwizard.netlify.app/',
      category: 'Front-End'
   },
   {
      id: 7,
      image: EcommerceStore,
      title: 'EcommerceShopifyStore-reactApp',
      github: 'https://github.com/syedmaazsaeed/EcommerceShopifyStore-reactApp',
      demo: '#',
      category: 'Full Stack MERN Apps'
   },
   {
      id: 8,
      image: TechfolioReact,
      title: 'Techfolio-React ',
      github: 'https://github.com/syedmaazsaeed/Techfolio-React',
      demo: '#',
      category: 'Front-End'
   },
   {
      id: 9,
      image: SimpleResume,
      title: 'Developer Portfolio',
      github: 'https://github.com/syedmaazsaeed/tech-portfolio',
      demo: 'https://syedmaazsaeed-portfolio.netlify.app/',
      category: 'Front-End'
   },
   // {
   //    id: 10,
   //    image: HealthCareSystem,
   //    title: 'HealthEase-System',
   //    github: 'https://github.com/syedmaazsaeed/HealthEase-System',
   //    demo: '#',
   //    category: 'C# Windows App'
   // },
]




const Portfolio = () => {
  

   const [filter, setFilter] = useState('All');
   const [filteredProjects, setFilteredProjects] = useState(data);

   // Filter projects based on category
   const handleFilterClick = (category) => {
      setFilter(category);
      if (category === 'All') {
         setFilteredProjects(data);
      } else {
         setFilteredProjects(data.filter(project => project.category === category));
      }
   }

   return (
     <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       {/* Filter Buttons */}
       <div className="portfolio__filters">
          <button onClick={() => handleFilterClick('All')} className={filter === 'All' ? 'active' : ''}>All</button>
          <button onClick={() => handleFilterClick('Full Stack MERN Apps')} className={filter === 'Full Stack MERN Apps' ? 'active' : ''}>Full Stack MERN Apps</button>
          <button onClick={() => handleFilterClick('Front-End')} className={filter === 'Front-End' ? 'active' : ''}>Frontend</button>
          {/* <button onClick={() => handleFilterClick('C# Windows App')} className={filter === 'C# Windows App' ? 'active' : ''}>C# Windows App</button> */}
          {/* Add more buttons as needed */}
       </div>

       {/* Portfolio Items */}
       <div className="container portfolio__container">
          {
             filteredProjects.map(({id, image, title, github, demo}) => {
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

export default Portfolio;
