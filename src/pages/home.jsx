import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Team from '../Components/Team/Team'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer'



const home = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Take a look at some of our work' title='Projects' />
        <Projects/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Purifying Our Planet: The Hands That Heal Nature' title='Team' />
        <Team/>
        <Title subTitle='Contact Us ' title='Get in Touch' />
        <Contact />
        <Footer />
        </div> 
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default home