import React from 'react'
import './Projects.css'
import projects_karura from '../../assets/_pkarura.jpg'
import projects_trees1 from '../../assets/_ptrees1.jpg'
import projects_kijabe from '../../assets/_pkijabe.jpg'

import projects_trash1 from '../../assets/_ptrash1.jpg'
import projects_githurai from '../../assets/_pgithurai.jpg'
import projects_trash2 from '../../assets/_ptrash2.jpg'



const Projects = () => {
    return ( 
        <div>
        <div className='programs'>
            <div className="program">
                <img src={projects_karura} alt="" />
                <div className="caption">
                    <p>Karura Forest</p>
                </div>
            </div>
            <div className="program">
                <img src={projects_trees1} alt="" />
                <div className="caption">
                    <p>Ngong Hills</p>
                </div>
            </div>
            <div className="program">
                <img src={projects_kijabe} alt="" />
                <div className="caption">
                    <p>Kijabe Forest</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects