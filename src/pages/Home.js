import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Resume from "../components/Resume/Resume";
import "./style.css";

function Home() {
    return (
        <div className="contain">
            <div className="homeBody">
                <Header />
                <About />
                <Projects />
                <Contact />
                <Resume />
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Home;