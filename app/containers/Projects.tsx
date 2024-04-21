import React from 'react';

import ProjectsCarousel from '../components/ProjectsCarousel';
import { ProjectsList } from '../data/Projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl md:text-2xl mb-8 md:mb-0'>Projects</h1>
      <div className="flex lg:hidden flex-col mx-4 h-fit">
        {ProjectsList.map((project, i) => (
          <div className='mb-8' key={i}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
      <div id='projects' className='hidden lg:flex justify-center items-center w-full h-full py-24'>
          <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Projects;