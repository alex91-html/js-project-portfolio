
import React from 'react';
import projectsData from './data/projects.json'; // Import your projects data
import ProjectCard from "./components/ProjectCard.jsx"; // Correct path


export const App = () => {
  return (
    <>
      <h1>Selected Projects</h1>
      {/* Loop through the projects array and render a ProjectCard for each */}
      <div className="projects-container">
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github}
          />
        ))}
      </div>
    </>
  );
};


// export const App = () => {
//   return (
//     <>
//       <h1>Hello</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>
//     </>
//   )
// }
