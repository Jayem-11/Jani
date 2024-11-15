import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
        </div>
        <div className="about-right">
            <h2>About Jani</h2>
            <h3>A cleaner environment equals a cleaner  life</h3>
            <p></p>
            <p>Jani is a vibrant community initiative dedicated to fostering environmental stewardship and sustainable living. </p>
            <p>Our mission is to to take action by planting trees. We believe that every seed planted can lead to a greener, cleaner earth.
            Through our efforts, we aim to inspire and empower communities to join us in making a tangible difference 
            for our planet's future. </p>
            <p>Join Jani, where every hand makes the earth stand a little taller and a lot cleaner.</p>
            
        </div>
      
    </div> 
  )
}

export default About