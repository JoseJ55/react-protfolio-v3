import React, { useContext } from "react";
import "./style.css";

import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsContext } from "./../../projectsContext"

function Projects() {
    // This component renders the project card on the main page and add or loses
    // card depending on how many projects there are.
    const { projects } = useContext(ProjectsContext)

    return (
        <div data-aos="fade-up" id="projects">
            <h2 id="projectsTitle">Projects</h2>
            <div id="projectArea">
                {projects.map((project) => {
                    return <ProjectCard 
                    title={project.title} 
                    images={project.images}
                    thumbnail={project.exampleImage}
                    link={project.links}
                    desc={project.description}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects;