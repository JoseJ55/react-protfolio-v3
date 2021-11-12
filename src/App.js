import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Project from "./pages/Project";
import { ProjectsContext } from "./projectsContext";

function App() {
  const { projects } = useContext(ProjectsContext)

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jose's Portfolio</title>
        <link real="cononical" href="https://portfolio826.herokuapp.com/" />
        <meta name="description" content="Jose Jimenez' portfolio showcasing projects and skills"/>
      </Helmet>
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
