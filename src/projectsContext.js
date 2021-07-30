import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([
        {
            title: "project 1",
            links: ["git.randomlink.com", "random.com"],
            description: "random text for testing the project pages for all project to make the website be responsive.",
            images: ["../../assets/images/sunset.jpg"],
            video: "",
        },
        {
            title: "project 2",
            links: ["git.randomlink.com", "random.com"],
            description: "random text for testing the project pages for all project to make the website be responsive.",
            images: ["../../assets/images/sunset.jpg"],
            video: "",
        },
        {
            title: "project 3",
            links: ["git.randomlink.com"],
            description: "random text for testing the project pages for all project to make the website be responsive.",
            images: ["../../assets/images/sunset.jpg"],
            video: "",
        }
    ])
    
    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}