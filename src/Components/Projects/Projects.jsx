import React from "react";
import "./Projects.css";
import projects_karura from "../../assets/_k5.jpg";
import projects_trees1 from "../../assets/_ptrees1.jpg";
import projects_kijabe from "../../assets/_pkijabe.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="programs">
        <div className="program">
          <Link to="/jani/karura">
            <img src={projects_karura} alt="" />
            <div className="caption">
              <p>Karura Forest</p>
            </div>
          </Link>
        </div>
        <div className="program">
          <img src={projects_trees1} alt="" />
          <div className="caption">
            <p>Upcoming</p>
          </div>
        </div>
        <div className="program">
          <img src={projects_kijabe} alt="" />
          <div className="caption">
            <p>Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
