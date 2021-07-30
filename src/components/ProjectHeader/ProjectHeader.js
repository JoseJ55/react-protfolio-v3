import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function ProjectHeader({ title, project, desc, links}) {
    let history = useHistory();
    console.log(title)
    console.log(project)
    // console.log(links)

    const home = () => {
        history.push("/");
    }

    return(
        <div className="projectHeader">
            <div className="projectHead">
                <button onClick={home}>Back</button>
            </div>
            
            <h2 className="projectName">{title}</h2>
            <div className="projectDesc">
                <p>{project.description}</p>
            </div>
            {/* -------------Important------------- */}
            {/* For the links the first needs to be github and then live project */}
            <div className="projectLinks">
                <p>Github: <a href={project.links[0]}>{project.links[0]}</a></p>
                {project.links[1] ? <p className="liveLink">Live project: <a href={project.links[1]}>{project.links[1]}</a></p> : <p></p>}
            </div>
        </div>
    )
}

export default ProjectHeader;