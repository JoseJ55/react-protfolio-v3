import React, { useState, useEffect } from 'react';
import './style.css';

import Letter from '../Letter/Letter';

function Header() {
    // This component render the main page header the image background.
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        console.log(update)
    }, [update])

    const title = "Hello I'm Jose Jimenez"
    const titleArr = title.split("");

    return (
        <div id="header">
            <div id="webTitle">
                {titleArr.map((letter) => {
                    if (letter === " "){
                        return <span>{letter}</span>
                    } else {
                        return ( 
                            <Letter 
                                letter={letter} 
                                update={update} 
                                setUpdate={setUpdate} 
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Header;