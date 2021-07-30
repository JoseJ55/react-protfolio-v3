import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ProjectsProvider } from "./projectsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
