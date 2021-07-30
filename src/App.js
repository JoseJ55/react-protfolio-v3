import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import { ProjectsContext } from "./projectsContext";

function App() {
  const { projects } = useContext(ProjectsContext)

  return (
    <BrowserRouter>
      {projects.map((project) => {
        return (
          <Route exact path={`/${project.title.replace(/\s/g, '')}`}>
            <Project title={project.title} project={project}/>
          </Route>
        )
      })}

      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
