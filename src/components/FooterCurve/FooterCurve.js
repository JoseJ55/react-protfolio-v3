import React from "react";
import "./FooterCurve.css";

function FooterCurve() {
    // using getwave.io to make curve.
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f1f0ed" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,186.7C384,181,480,171,576,176C672,181,768,203,864,197.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    )
}

export default FooterCurve;