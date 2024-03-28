import React from 'react';

import ProjectsCarousel from '../components/ProjectsCarousel';

const Projects = () => {
  return (
    <div id='projects' className='flex justify-center items-center w-full h-full py-24'>
        <ProjectsCarousel />
    </div>
  );
};

export default Projects;