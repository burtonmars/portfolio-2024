'use client';

import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsList } from '../data/Projects';

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(1);
  const length = ProjectsList.length;

  const calculateTransform = () => {
    return -(index - 1) * 100 / 3;
  };

  const handleCardClick = (idx: number) => {
    if (idx !== index) {
      setIndex(idx);
    }
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => prevIndex === 0 ? length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <div className="relative w-full h-[90%] flex flex-col items-center">
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex h-full w-full transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(${calculateTransform()}%)` }}>
          {ProjectsList.map((project, idx) => (
            <div className="flex justify-center items-center h-full min-w-[33.333%]"
              key={project.id}
              onClick={() => handleCardClick(idx)}  
              style={{
                   transform: idx === index ? 'scale(1)' : 'scale(0.8)',
                   opacity: idx === index ? 1 : 0.5,
                   cursor: idx === index ? 'default' : 'pointer'
                 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-1/5 xl:w-1/6 my-4 gap-2">
        <button className="btn btn-ghost w-24" onClick={handlePrevious}>&lt;&lt;</button>
        <button className="btn btn-ghost w-24" onClick={handleNext}>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;