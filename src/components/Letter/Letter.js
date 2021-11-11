import React from "react";
import "./style.css";

function Letter({ letter }) {

    return (
        <div className="letters">
            <span 
                className="letter"
                onClick={() => console.log(letter)}
            >
                {letter}
            </span>
        </div>
    )
}

export default Letter;