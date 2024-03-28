import React from 'react';

import ProjectsCarousel from '../components/ProjectsCarousel';
import { ProjectsList } from '../data/Projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <>
      <div className="flex md:hidden flex-col mx-4 h-fit">
        {ProjectsList.map((project, i) => (
          <div className='mb-8' key={i}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
      <div id='projects' className='hidden md:flex justify-center items-center w-full h-full py-24'>
          <ProjectsCarousel />
      </div>
    </>
  );
};

export default Projects;