'use client';

import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsList } from '../data/Projects';

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div>
        <ProjectCard 
          key={ProjectsList[index].id}
          project={ProjectsList[index]}
        />
      </div>
    </div>
  );
};

export default ProjectsCarousel;