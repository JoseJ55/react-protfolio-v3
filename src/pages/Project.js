import React, { useState, useContext, useEffect } from "react";

import ProjectHeader from "./../components/ProjectHeader/ProjectHeader";
import ProjectImages from "./../components/ProjectImages/ProjectImages";
import ProjectVideo from "./../components/ProjectVideo/ProejctVideo";
// import { ProjectsContext } from "./../projectsContext";

// find out why useContext is not working
function Project({ title, project }) {
    // console.log(project)
    return (
        <div>
            {/* {title} */}
            <ProjectHeader 
                title={title}
                project={project}
            />
            <ProjectImages images={project.images} />
            <ProjectVideo video ={project.video} />
        </div>
    )
}

export default Project;