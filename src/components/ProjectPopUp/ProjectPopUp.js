import React, { useState } from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";
import { AiOutlineClose } from "react-icons/ai";

function ProjectPopUp({ popUp, setPopUp, title, link, desc }) {
    // const [popUp, setPop] = useState(false);
    const animation = useSpring({
        // opacity: popUp ? 1 : 0,
        // marginTop: popUp ? 0 : -500,
        from: {marginTop: -500},
        to: {marginTop: 0},
        duration: 2000,
    })

    return (
        
        <div id="popUp">
            <animated.div id="popUpArea" style={animation}>
                {/* <div id="popUpArea"> */}
                    <button 
                        type="button" 
                        id="popUpExit"
                        onClick={() => setPopUp(false)} value="show"
                    ><AiOutlineClose/></button>

                    <h2>{title}</h2>
                    {/* change desc to a sorter version so it can fit on screen better. */}
                    <p>{desc}</p>

                    <button type="button" value="full">More Info</button>
                {/* </div> */}
            </animated.div>
        </div>
        
    )
}

export default ProjectPopUp;