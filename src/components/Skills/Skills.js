import React from "react";
import "./style.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

function Skills() {
    // This component renders skills section for the main page.
    return (
        <div id="skills">
            <h2 id="skillTitle">Skills</h2>
            
            <ul>
                <li className="skillBox">
                    <div id="skillHTML" className="skillC">
                        <AiFillHtml5 color="orange"/>
                    </div>
                    HTML
                </li>
                <li className="skillBox">
                    <div id="skillCSS" className="skillC">
                        <FaCss3Alt color="blue"/>
                    </div>
                    CSS
                </li>
                <li className="skillBox">
                    <div id="skillJS" className="skillC">
                        <DiJavascript1 color="black"/>
                    </div>
                    Javascript
                </li>
                <li className="skillBox">
                    <div id="skillNode" className="skillC">
                        <FaNodeJs color="green"/>
                    </div>
                    Node.js
                </li>
                <li className="skillBox">
                    <div id="skillReact" className="skillC">
                        <FaReact color="blue"/>
                    </div>
                    React.js
                </li>
                <li className="skillBox">
                    <div id="skillSQL" className="skillC">
                        <DiMysql color="blue"/>
                    </div>
                    MySQL
                </li>
                <li className="skillBox">
                    <div id="skillMongo" className="skillC">
                        <DiMongodb color="green"/>
                    </div>
                    Mongoose
                </li>
            </ul>
        </div>
    )
}

export default Skills;