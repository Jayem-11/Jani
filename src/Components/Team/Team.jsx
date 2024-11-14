import React from 'react'
import './Team.css'
import gallery_1 from '../../assets/_k0.jpg'
import gallery_2 from '../../assets/_k1.jpg'
import gallery_3 from '../../assets/_k2.jpg'
import gallery_4 from '../../assets/_k3.jpg'

const Team = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            
        </div>
    </div>
  )
}

export default Team