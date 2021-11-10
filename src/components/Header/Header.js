import React, { useState } from 'react';
import './style.css';

function Header() {
    const [ letterAnimation, setLetterAnimation ] = useState({

    })
    const title = "Hello I'm Jose Jimenez"
    // This component render the main page header the image background.
    // for (let i = 0; i < title.length; i++){
    //     console.log(title[i])
    // }
    const titleArr = title.split("");
    // console.log(titleArr)
    return (
        <div id="header">
            {/* <h1 id="webTitle">{title}</h1> */}
            <div id="webTitle">
                {titleArr.map((letter) => {
                    if (letter === " "){
                        return <span>{letter}</span>
                    } else {
                        return <span className="letter">{letter}</span>
                    }
                })}
            </div>
        </div>
    )
}

export default Header;