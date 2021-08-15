import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([
        {
            title: "Google React Books",
            links: ["https://github.com/JoseJ55/google-books", "https://google-books-826.herokuapp.com/"],
            description: "A program that allows the user to search books and either view them at the google estore or save them for later. A user is able to view a whole veriaty of books they can read, with the option of view and buying any book the user wants the user can keep track of the books they want to own. The program utilizes the Google Books API to gather information of the books searched like the title, author(s), and a breif description. The user is also able to save books to the mongoose database for later which there they can also remove from the database when they don't want it anymore. This application uses react and react hooks to make the webpage and make multiple page for every book searched. It also uses node.js and express to gather the data from the google books api and gives data to the frontend when asked with express. Lastly, the books are saved using mongoose to later view them.",
            tools: ["React.js", "React-hooks", "Express.js", "Node.js", "HTML", "CSS", "Axios", "Mongoose"],
            exampleImage: "googleBooksHome.png", // Current doesn't do anything.
            images: ["/images/googleBooks/googleBooks.png", "/images/googleBooks/googleBooks2.png"],
            video: "/videos/googleBooks/googleBooksSearchShowcase.mp4",
        },
        {
            title: "Team Profile Generator",
            links: ["https://github.com/JoseJ55/Team-Profile-Generator"],
            description: "A node app that ask questions and uses the answers to build a simple webpage with the informaton provided. This application is for users who want a simple webpage that show all employees in a group and there information like role, id, and email. Once the user starts the application they will be prompted on terminal questions about there team members. They will start out with the team manager and then add other team memebers one by one. The user is able to enter information for an enginner role and an intern role where they are prompted different question for their need. After all the questions have been answered an html file will be built based on the answers allowing the user to move the file or copy it to another directory. This application utilizes inquirer to get information and node to build the html file for the user.",
            tools: ["Express.js", "Node.js", "HTML", "CSS", "inquirer"],
            exampleImage: "sunset.jpg",
            images: ["/images/teamProfileGenerator/teamProfileGenerator1.png", "/images/teamProfileGenerator/teamProfileGenerator2.png", "/images/teamProfileGenerator/teamProfileGenerator3.png"],
            video: "/videos/teamProfileGenerator/teamProfileGenShowcase.mp4",
        },
        {
            title: "Weather Dashboard",
            links: ["https://github.com/JoseJ55/Weather-bashboard", "https://weather-dash-015.herokuapp.com/"],
            description: "The weather dashboard is an app built using HTML, CSS, and fetch api. A user can search a major city and will recieve weather data on the city they searched for and a simple forcasst for the next five days. The data will be placed in their appropriate location so the user can easily read and look at. The data that will be showen is the tempature, humidity, and wind speed on the top for the current day. The user will also be able to view the tempature, and humidity for the next five days for the city searched. There is also a small search history for the previous 8 cities serached where the user can click on them and show their data for the current day. This application utilizes react and react hooks to create a nice looking webpage. It also uses axios and localstorage to get data from open weather maps api and store that data in the localstorage for later.",
            tools: ["React.js", "React-routes", "React-Hooks", "HTML", "CSS", "Javascript", "Axios", "Localstorage"],
            exampleImage: "sunset.jpg", 
            images: ["/images/weatherDashboard/weatherDashboard.png"],
            video: "/videos/weatherDashboard/weatherDashboardShowcase.mp4",
        }
    ])

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}