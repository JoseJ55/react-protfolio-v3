import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp";

// change names here for pictures.
// import image1 from "./../../assets/images/googleBooksHome.png";
// import image2 from "./../../assets/images/teamProfileGen.png";
// import image3 from "./../../assets/images/weatherDashboard.png";

function ProjectCard({ title, images, links, desc }) {
    const [popUp, setPopUp] = useState(false);
    // This is the project card component where it checks if an item is in an
    // array and renders the spcific card.
    // console.log(images)
    let history = useHistory();
    const changeToProject = (files) => {
        let file = files.replace(/\s/g, '');
        history.push(`/${file}`);
    }
    
    return (
        <div className="projectContainer">
            <p 
                className="projectTitle" 
                onClick={() => setPopUp(true)}//changeToProject(title)}
                >{title}</p>
            <input 
                type="button" 
                className="project"
                onClick={() => setPopUp(true)}//changeToProject(title)}
                style={{
                    backgroundImage: `url(${images[0]})`
                }}
            />
            {popUp ? <ProjectPopUp setPopUp={setPopUp} title={title} link={links} desc={desc}/>: <div></div>}
            
        </div>
    )
}

export default ProjectCard;