import devacityLanding from '../../public/devacity-screenshot.webp'
import ambientFocusSnap from '../../public/ambient-focus-snapshot.webp'
import portfolioSnap from '../../public/portfolio-screen-shot.webp'
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
      'An app that allows users to layer ambient sound samples to create soundscapes that transform their atmosphere in a positive way.',
    liveLink: 'https://ambient-focus-chi.vercel.app/',
    codeLink: 'https://github.com/burtonmars/Ambient-Focus',
  },
  {
    id: 2,
    title: 'My Portfolio',
    techs: ['React', 'Tailwind', 'emailJS'],
    image: portfolioSnap,
    description:
      'My personal portfolio site for highlighting my skills and providing quick access to the live sites and code bases of my most recent projects.',
    liveLink: '',
    codeLink: 'https://github.com/burtonmars/portfolio-site',
  },
]
