import React from 'react';
import Image from 'next/image';

import { Project } from '../data/Projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='card card-image-cover h-full'>
      <Image className='border-4'
        src={project.image}
        alt={project.title}
      />
      <div className="card-body flex flex-col justify-center items-center h-5/6">
        <h2 className='text-lg'>{project.title}</h2>
        <p>{project.description}</p>
        <div className='flex justify-center items-center h-2/6 py-4 flex-wrap'>
          {project.techs.map((tech, index) => (
            <span key={index} className='badge bg-accent mx-1'>{tech}</span>
          ))}
        </div>
        <div className="flex justify-between items-center w-5/6">
          <Link 
            className='btn btn-primary'
            href={project.liveLink}
            target="_blank">Visit Live
          </Link>
          <Link
            className='btn btn-secondary'
            href={project.codeLink}
            target="_blank">View Code
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard