import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

import gitHubLogo from '../../public/github-mark.webp';
import linkedInLogo from '../../public/LI-In-Bug.webp';


const NavBarFull = () => {
    return (
        <nav className='flex justify-between items-center w-full'>
            <ul className='flex justify-between items-center w-full'>
                <li className='text-xl'><Link href="#skills">Skills</Link></li>
                <li className='text-xl'><Link href='#projects'>Projects</Link></li>
                <li className='text-xl'><Link href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></Link></li>
                <li className='text-xl'><Link href="#contact">Contact</Link></li>
                <li className='github-icon'>
                    <Link href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
                        <Image 
                            src={gitHubLogo}
                            width={32}
                            height={32}
                            alt={'github'}>
                        </Image>
                    </Link>
                </li>
                <li className='linkedin-icon'>
                    <Link href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
                        <Image 
                            src={linkedInLogo}
                            width={38}
                            height={32}
                            alt={'linked in'}>
                        </Image>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const NavBarSmall = () => {
    return (
        <div className="flex md:hidden" aria-label="Main navigation">
            <nav className="dropdown">
               <button aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded="false" className="flex cursor-pointer px-0 h-full w-full" tabIndex={0}>
                    <GiHamburgerMenu size={40} aria-label="Open menu"/>
                </button>
                <ul className="dropdown-menu dropdown-menu-bottom-right bg-slate-50 text-themeBlack">
                    <li className='text-2xl ml-2 leading-loose font-bold'><Link href="#skills">Skills</Link></li>
                    <li className='text-2xl ml-2 leading-loose font-bold '><Link href='#projects'>Projects</Link></li>
                    <li className='text-2xl ml-2 leading-loose font-bold'><Link href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></Link></li>
                    <li className='text-2xl ml-2 leading-loose font-bold'><Link href="#contact">Contact</Link></li>
                    <li className='text-2xl ml-2 leading-loose font-bold'><Link href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">Github</Link></li>
                    <li className='text-2xl ml-2 leading-loose font-bold'><Link href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">LinkedIn</Link></li>
                </ul>
            </nav>
		</div>
    );
}


const NavBar = () => {
  return (
    <div className='m-10 xxl:mr-24 xxxl:mr-48 w-full lg:w-2/6'>
        <div className='hidden md:flex items-center'>
            <NavBarFull />
        </div>
        <div className='flex md:hidden w-2/6 items-center'>
            <NavBarSmall />
        </div>
    </div>
  )
}

export default NavBar