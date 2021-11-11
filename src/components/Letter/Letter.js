import React from "react";
import "./style.css";

function Letter({ letter }) {
    // console.log(letter)
    const l = () => {
        if (letter === " "){
            console.log("blank")
            return <span>{" "}</span>
        } else {
            return <span 
                // onClick={() => letterBtn()} 
                className="letter"
                // style={letterAnimation}
                >
                    {letter}
                </span>
        }
    }
    return (
        <div className="letters">
            {l()}

            {/* {letter === " " ? <span>{letter}</span> : <span className="letter">{letter}</span>} */}
            
            {/* // {if (letter === " "){
            //     return <span>{letter}</span>
            // } else {
            //     return <span 
            //         onClick={() => letterBtn()} 
            //         className="letter"
            //         style={letterAnimation}
            //         >
            //             {letter}
            //         </span>
            // }} */}
        </div>
    )
}

export default Letter;