import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

import gitHubLogo from '../../public/github-mark.webp';
import linkedInLogo from '../../public/LI-In-Bug.webp';


const NavBarFull = () => {
    return (
        <div className='flex justify-between items-center w-full'>
            <p className='text-lg'><Link href="#skills">Skills</Link></p>
            <p className='text-lg'><Link href='#projects'>Projects</Link></p>
            <p className='text-lg'><Link href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></Link></p>
            <p className='text-lg'><Link href="#contact">Contact</Link></p>
            <p className='github-icon'>
                <Link href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
                    <Image 
                        src={gitHubLogo}
                        width={32}
                        alt={'github'}>
                    </Image>
                </Link>
            </p>
            <p className='linkedin-icon'>
                <Link href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
                    <Image 
                        src={linkedInLogo}
                        width={34}
                        alt={'linked in'}>
                    </Image>
                </Link>
            </p>
        </div>
    )
}

const NavBarSide = () => {
    return (
        <div className="flex md:hidden">
            <div className="dropdown">
                <label className="flex cursor-pointer px-0 h-full w-full" tabIndex={0}>
                    <GiHamburgerMenu size={40}/>
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                    <p className='text-2xl leading-loose'><Link href="#skills">Skills</Link></p>
                    <p className='text-2xl leading-loose'><Link href='#projects'>Projects</Link></p>
                    <p className='text-2xl leading-loose'><Link href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></Link></p>
                    <p className='text-2xl leading-loose'><Link href="#contact">Contact</Link></p>
                    <p className='text-2xl leading-loose'><Link href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">Github</Link></p>
                    <p className='text-2xl leading-loose'><Link href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">LinkedIn</Link></p>
                </div>
            </div>
		</div>
    );
}


const NavBar = () => {
  return (
    <div className='m-10 xxl:mr-24 xxxl:mr-48 w-2/6'>
        <div className='hidden md:flex items-center'>
            <NavBarFull />
        </div>
        <div className='flex md:hidden w-2/6 items-center'>
            <NavBarSide />
        </div>
    </div>
  )
}

export default NavBar