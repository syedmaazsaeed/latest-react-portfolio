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
      description: 'Github-CodeSource App is a full-stack MERN application with user authentication and profile management. It uses MongoDB Atlas for data storage and integrates GitHub authentication through Passport.js. The server is configured with Express and Node.js, using express-session for session management and Helmet.js for security. The frontend, built with React, provides a responsive interface with routes for user and explore functionalities.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 2,
      image: WeatherApp,
      title: 'ForecastFusion-Weather-App',
      description: 'ForecastFusion Weather App! This modern online solution offers accurate and attractive weather forecasts. The goal of ForecastFusion is to become your daily go-to tool for checking up on current and regional temperature forecasts, in a more concise view than what weather websites like Weather.com offer. ForecastFusion aims to be your one-stop shop for Daily weather updates and day Planning',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 3,
      image: NoteVault,
      title: 'NoteVaultPro-MernApp',
      description: 'A secure MERN stack app for cloud note storage is called NoteVault. It prioritises user privacy with cutting-edge encryption and provides easy note writing, editing, and organisation. NoteVault offers a scalable architecture and user-friendly interface for centralised and accessible note-taking, catering to both professionals and students.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 4,
      image: NewsPulse,
      title: 'React-NewsPulse-App',
      description: 'NewsPulse is a React-based web application that fetches and displays the latest news articles from various categories using the NewsAPI. Using the NewsAPI, the web application NewsPulse retrieves and presents the most recent news items from a variety of categories. Users can browse news stories in a variety of categories, including technology, business, entertainment, general, health, and sports.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 5,
      image: MovieApp,
      title: 'React-Movie-Search',
      description: 'The React-built Movies search application.By clicking on each movies card, viewers may examine extensive information about the film, including its year, poster, and genre.Javascript provides an easy-to-use interface for movie discovery.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 6,
      image: TextWizard,
      title: 'ReactJS-WordCounter',
      description: 'TextMastery allows users to perform the following text transformations: convert text to uppercase, convert text to lowercase, generate speech for the text, resume speech from where it was paused, pause the ongoing speech, clear the text input, copy the text, convert text to sentence case, and remove extra spaces.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 7,
      image: EcommerceStore,
      title: 'EcommerceShopifyStore-reactApp',
      description: 'This is a React application that serves as the front end for a Shopify e-commerce store. It utilizes components to structure the user interface and interacts with the Shopify API (to be implemented) to retrieve and display product information, handle user actions like adding items to the cart, and potentially checkout flows.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 8,
      image: TechfolioReact,
      title: 'Techfolio-React ',
      description: 'This is my Tech Portfolio site! This repository contains the source code and assets for my portfolio. As a passionate front-end developer and software engineering student, I have created this website to showcase my skills, experience, and the projects I have worked on. Whether you are a potential client, employer, or fellow developer, I invite you to explore my portfolio to learn more about my work and capabilities.',
      github: 'https://github.com',
      demo: 'https://syedmaasaeed.tech/'


   },
   {
      id: 9,
      image: SimpleResume,
      title: 'Github-CodeSource-FullStack-App',
      description: 'Techfolio is a React portfolio for displaying skills, projects and tech stack. On the home page, visitors can explore my journey or view featured projects; below this information are social media links where potential employers and clients can easily connect. It comes with a clean, responsive design that functions smoothly across all devices',
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
            data.map(({id, image, title, description, github, demoLink}) => {
               return (
                  <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
             
             <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="portfolio__item-cta">     

         <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demoLink} className='btn btn-primary' target='_blank'>Live View</a>

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




