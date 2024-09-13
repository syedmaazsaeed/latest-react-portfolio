import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollProgressBar from './Components/ScrollProgressbar/ScrollProgressBar';
import SkillsChart from './Components/SkillsChart/SkillsChart';


const App = () => {
  return (
    <>
    <ScrollProgressBar />
    <Header />
   <Nav />
   <About />
   <Experience />
   <SkillsChart /> 
   <Services />
   <Portfolio />
   <Testimonials />
   <Contact />
   <Footer />

    </>
  )
}

export default App
