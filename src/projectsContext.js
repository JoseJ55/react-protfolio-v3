import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([
        {
            title: "Google React Books",
            links: ["https://github.com/JoseJ55/google-books", "https://google-books-826.herokuapp.com/"],
            description: "A program that allows the user to search books and either view them at the googl estore or save them for later. The program utilizes the Google Books API to gather information of the books searched like the title, author(s), and a breif description. The user is also able to save book to the mongoose database for later which there thy can als remove from the save section of the database.",
            exampleImage: "googleBooksHome.png", // Current doesn't do anything.
            images: ["/images/googleBooks/googleBooks.png", "/images/googleBooks/googleBooks2.png"],
            video: "",
        },
        {
            title: "Team Profile Generator",
            links: ["https://github.com/JoseJ55/Team-Profile-Generator"],
            description: "A node app that ask questions and uses the answers to build a simple webpage showing the informaton provided. Once the user starts the application they will be prompted on terminal questions about there team members. They will start out with the team manager and then add other team memebers one by one. The user is able to enter information for an enginner role and an intern role where they are prompted different question for their need. After all the questions have been answered an html file will be built based on the answers allowing the user to move the file or copy it to another directory.",
            exampleImage: "sunset.jpg",
            images: ["/images/teamProfileGenerator/teamProfileGenerator1.png", "/images/teamProfileGenerator/teamProfileGenerator2.png", "/images/teamProfileGenerator/teamProfileGenerator3.png"],
            video: "",
        },
        {
            title: "Weather Dashboard",
            links: ["https://github.com/JoseJ55/Weather-bashboard", "https://weather-dash-015.herokuapp.com/"],
            description: "The weather dashboard is an app built using HTML, CSS, and fetch api. A user can search a major city and will recieve weather data on the city. The data will be placed in their appropriate location and so the user can easily read and look for. The data that will be showen is the tempature, humidity, wind speed, and uv index on the top for the current day. The user will also be able to view the tempature, and humidity for the next five days for the city searched. There is also a small search history for the previous 8 cities serached where the user can click on them and show their data for the current day.",
            exampleImage: "sunset.jpg", 
            images: ["/images/weatherDashboard/weatherDashboard.png"],
            video: "",
        }
    ])

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}