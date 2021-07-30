import React from "react";
import "./style.css";

function ProjectCard({ title }) {
    return (
        <div>
            <a href={`/${title.replace(/\s/g, '')}`}>
                <button className="project" id="project1">
                    <h2>{title}</h2>
                </button>
            </a>
        </div>
    )
}

export default ProjectCard;