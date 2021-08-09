import React from "react";
import "./style.css";

function Resume() {
    return (
        <div id="resume">
            <h2 id="resumeTitle">Resume</h2>
            <div id="resumeArea">
                <iframe id="resumeDoc" src="https://docs.google.com/document/d/1cfbV08aBLPz3_4R3S7HFbsJ0qROhztrGV4CShRUOjTw/edit?usp=sharing;rm=minimal" title="resume document"></iframe>
            </div>
        </div>
    )
}

export default Resume;