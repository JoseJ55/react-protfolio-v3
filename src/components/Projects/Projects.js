import React, { useContext } from "react";
import "./style.css";

import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsContext } from "./../../projectsContext"

function Projects() {
    // This component renders the project card on the main page and add or loses
    // card depending on how many projects there are.
    const { projects } = useContext(ProjectsContext)

    return (
        <div id="projects">
            <h2 id="projectsTitle">Projects</h2>
            {projects.map((project) => {
                return <ProjectCard 
                title={project.title} 
                thumbnail={project.exampleImage}
                />
            })}
        </div>
    )
}

export default Projects;