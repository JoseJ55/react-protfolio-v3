import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([
        {
            title: "Google React Books",
            links: ["https://github.com/JoseJ55/google-books", "https://google-books-826.herokuapp.com/"],
            description: "A program that allows the user to search books and either view them at the googl estore or save them for later. The program utilizes the Google Books API to gather information of the books searched like the title, author(s), and a breif description. The user is also able to save book to the mongoose database for later which there thy can als remove from the save section of the database.",
            exampleImage: "googleBooksHome.png",
            images: ["../../assets/images/sunset.jpg"],
            video: "",
        },
        {
            title: "Team Profile Generator",
            links: ["https://github.com/JoseJ55/Team-Profile-Generator"],
            description: "random text for testing the project pages for all project to make the website be responsive.",
            exampleImage: "sunset.jpg",
            images: ["../../assets/images/sunset.jpg"],
            video: "",
        },
        {
            title: "Weather Dashboard",
            links: ["https://github.com/JoseJ55/Weather-bashboard", "https://weather-dash-015.herokuapp.com/"],
            description: "random text for testing the project pages for all project to make the website be responsive.",
            exampleImage: "sunset.jpg",
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