import React from "react";
import Particles from "react-tsparticles";
import pBackground from "../../config/pBackground";
import pTest from "../../config/pTest";

function ParticlesBackGround() {
    return (
        <Particles 
            style={{position: "absolute"}}
            height="95%"
            width="95%"
            params={pBackground}
            // params={pTest}
        />
    )
}

export default ParticlesBackGround;