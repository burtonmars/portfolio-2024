import React from 'react';

import ProjectsCarousel from '../components/ProjectsCarousel';
import { ProjectsList } from '../data/Projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center h-fit w-full'>
      <h1 className='text-2xl xl:text-3xl xxl:text-4xl font-bold mb-8 md:mb-0'>Projects</h1>
      <div className="flex lg:hidden flex-col mx-4 h-fit">
        {ProjectsList.map((project, i) => (
          <div className='mb-12' key={i}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
      <div className='hidden lg:flex justify-center items-center w-full h-full py-24'>
          <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Projects;