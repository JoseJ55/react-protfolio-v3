import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

// change names here for pictures.
import image1 from "./../../assets/images/googleBooksHome.png";
import image2 from "./../../assets/images/teamProfileGen.png";
import image3 from "./../../assets/images/weatherDashboard.png";

function ProjectCard({ title, images }) {
    // This is the project card component where it checks if an item is in an
    // array and renders the spcific card.
    console.log(images)
    let history = useHistory();
    const changeToProject = (files) => {
        let file = files.replace(/\s/g, '');
        history.push(`/${file}`);
    }
    
    return (
        <div data-aos="fade-up" className="projectContainer">
            <p className="projectTitle" onClick={() => changeToProject(title)}>{title}</p>
            <input 
                type="button" 
                className="project"
                onClick={() => changeToProject(title)}
                style={{
                    backgroundImage: `url(${images[0]})`
                }}
            />
        </div>
    )
}

export default ProjectCard;