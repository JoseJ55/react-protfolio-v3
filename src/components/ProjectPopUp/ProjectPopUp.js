import React from "react";
import "./style.css";

function ProjectPopUp({ setPopUp, title, link, desc }) {
    return (
        <div id="popUp">
            <div id="popUpArea">
                <input type="button" onClick={() => setPopUp(false)} value="show"/>
                <h2>{title}</h2>
                {/* change desc to a sorter version so it can fit on screen better. */}
                <p>{desc}</p>
                <input type="button" value="full"/>
            </div>
        </div>
    )
}

export default ProjectPopUp;