'use client';

import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsList } from '../data/Projects';

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);
  const [transform, setTransform] = useState(0);

  const length = ProjectsList.length;

  const handlePrevious = () => {
   const newIndex = index - 1;
   const newPrevIndex = prevIndex - 1;
   const newNextIndex = nextIndex - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
   setPrevIndex(newPrevIndex < 0 ? length - 1 : newPrevIndex);
   setNextIndex(newNextIndex < 0 ? length - 1 : newNextIndex);
   setTransform(transform + 100);
  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    const newPrevIndex = prevIndex + 1;
    const newNextIndex = nextIndex + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setPrevIndex(newPrevIndex >= length ? 0 : newPrevIndex);
    setNextIndex(newNextIndex >= length ? 0 : newNextIndex);
    setTransform(transform - 100);
  };

  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-full">
      <div className="flex w-5/6 h-full justify-between items-center">
        <div className='flex justify-center items-center h-[90%] relative z-0' onClick={handlePrevious}>
          <ProjectCard
            key={ProjectsList[prevIndex].id}
            project={ProjectsList[prevIndex]}
          />
          <div className="absolute rounded-md inset-0 z-10 bg-secondary opacity-45 blur-sm"></div>
        </div>
        <div className='flex justify-center items-center h-full duration-500'>
          <ProjectCard 
            key={ProjectsList[index].id}
            project={ProjectsList[index]}
          />
        </div>
        <div className='flex justify-center items-center h-[90%] relative z-0' onClick={handleNext}>
          <ProjectCard 
            key={ProjectsList[nextIndex].id}
            project={ProjectsList[nextIndex]}
          />
          <div className="absolute rounded-md inset-0 z-10 bg-secondary opacity-45 blur-sm"></div>
        </div>
      </div>
      <div className='flex justify-between items-center w-1/5 xl:w-1/6 my-4'>
        <button className='btn btn-accent w-24' onClick={handlePrevious}>Previous</button>
        <button className='btn btn-accent w-24' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;