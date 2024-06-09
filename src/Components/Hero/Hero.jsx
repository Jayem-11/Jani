import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>All about nature!</h1>
            <p> </p>
            <Link to='programs'  smooth={true} offset={-260} duration={500}  className="btn" >Explore our projects <img src={dark_arrow} alt="" /></Link>
        </div>
      
    </div>
  )
}

export default Hero 