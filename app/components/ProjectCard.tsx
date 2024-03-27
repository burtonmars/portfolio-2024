import React from 'react';
import { Project } from '../data/Projects';

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard