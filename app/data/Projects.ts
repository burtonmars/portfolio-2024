import devacityLanding from '../../public/devacity-screenshot.webp'
import ambientFocusSnap from '../../public/ambient-focus-snapshot.webp'
import portfolioSnap from '../../public/portfolio-screen-shot.webp'
import whatsForDinnerSnap from '../../public/ambient-focus-snapshot.webp'

import { StaticImageData } from 'next/image'

export type Project = {
  id: number
  title: string
  techs: string[]
  image: StaticImageData
  description: string
  liveLink: string
  codeLink: string
}

export const ProjectsList: Project[] = [
  {
    id: 0,
    title: 'Devacity',
    techs: ['React', 'Next.JS', 'MongoDB'],
    image: devacityLanding,
    description:
      'An agile project management tool for tracking and managing the capacity of a team of developers.',
    liveLink: 'https://devacity-wine.vercel.app/',
    codeLink: 'https://github.com/burtonmars/devacity',
  },
  {
    id: 1,
    title: 'Ambient Focus',
    techs: ['React', 'Next.JS'],
    image: ambientFocusSnap,
    description:
      'A sound app that allows users to layer ambient sound samples to create soundscapes that transform their atmosphere in a positive way.',
    liveLink: 'https://ambient-focus-chi.vercel.app/',
    codeLink: 'https://github.com/burtonmars/Ambient-Focus',
  },
  {
    id: 2,
    title: 'My Portfolio',
    techs: ['React', 'Next.js', 'Tailwind', 'emailJS'],
    image: portfolioSnap,
    description:
      'My personal portfolio site for highlighting my skills and providing quick access to the live sites and code bases of my most recent projects.',
    liveLink: 'https://marshal-portfolio-git-main-burtonmars.vercel.app/',
    codeLink: 'https://github.com/burtonmars/portfolio-site',
  },
  {
    id: 3,
    title: 'Whats For Dinner',
    techs: ['React', 'Tailwind', 'DaisyUI', 'Prisma', 'Next.JS', 'PostgreSQL'],
    image: whatsForDinnerSnap,
    description:
      'A menu app that allows users to create, read, update, and delete menu items. The app also allows users to search for menu items by name or key words.',
    liveLink: 'https://whats-for-dinner-lovat.vercel.app/',
    codeLink: 'https://github.com/burtonmars/whats-for-dinner',
  },
]
