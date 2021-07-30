import React, { useContext } from "react";
import "./style.css";

import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsContext } from "./../../projectsContext"

function Projects() {
    const { projects } = useContext(ProjectsContext)

    return (
        <div id="projects">
            <h2 id="projectsTitle">Projects</h2>
            {projects.map((project) => {
                return <ProjectCard title={project.title}/>
            })}
        </div>
    )
}

export default Projects;