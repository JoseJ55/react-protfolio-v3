import React, { useState } from "react";
import "./style.css";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp";

function ProjectCard({ title, images, links, desc }) {
    const [popUp, setPopUp] = useState(false);
    // This is the project card component where it checks if an item is in an
    // array and renders the spcific card.
    
    return (
        <div className="projectContainer">
            <p 
                className="projectTitle" 
                onClick={() => setPopUp(true)}
                >{title}</p>
            <input 
                type="button" 
                className="project"
                onClick={() => setPopUp(true)}
                style={{
                    backgroundImage: `url(${images[0]})`
                }}
            />
            {popUp ? <ProjectPopUp popUp={popUp} setPopUp={setPopUp} title={title} link={links} desc={desc}/>: <div></div>}
        </div>
    )
}

export default ProjectCard;