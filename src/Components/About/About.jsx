import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>About Jani</h2>
            <h3>A cleaner environment equals a cleaner  life</h3>
            <p></p>
            <p>Jani is a vibrant community initiative dedicated to fostering environmental stewardship and sustainable living. </p>
            <p>Our mission is to to take action by planting trees and cleaning up trash in our surroundings. We believe that every seed planted and every piece of 
            litter removed can lead to a greener, cleaner earth. </p>
            <p>Through our efforts, we aim to inspire and empower communities to join us in making a tangible difference 
            for our planet's future. Join Jani, where every hand makes the earth stand a little taller and a lot cleaner.</p>
            
        </div>
      
    </div> 
  )
}

export default About