import React from "react";
import "./style.css";

// change names here for pictures.
import image1 from "./../../assets/images/googleBooksHome.png";
import image2 from "./../../assets/images/teamProfileGen.png";
import image3 from "./../../assets/images/weatherDashboard.png";

function ProjectCard({ title  }) {

    
    return (
        <div className="projectContainer">
            <a href={`/${title.replace(/\s/g, '')}`}>
                {title === "Google React Books" ? <button 
                    className="project" 
                    id="project1" 
                    style={{backgroundImage: `url(${image1})`}}>
                </button>: <></>}

                {title === "Team Profile Generator" ? <button 
                    className="project" 
                    id="project1" 
                    style={{backgroundImage: `url(${image2})`}}>
                </button>: <></>}

                {title === "Weather Dashboard" ? <button 
                    className="project" 
                    id="project1" 
                    style={{backgroundImage: `url(${image3})`}}>
                </button>: <></>}

                <h2 className="projectTitle">{title}</h2>
            </a>
        </div>
    )
}

export default ProjectCard;