import React from 'react';
import Image from 'next/image';

import gitHubLogo from '../../public/github-mark.webp';
import linkedInLogo from '../../public/LI-In-Bug.webp';

const NavBarFull = () => {
    return (
        <div className='flex justify-between items-center w-full'>
            <p><a href="#skills">Skills</a></p>
            <p><a href='#projects'>Projects</a></p>
            <p><a href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></a></p>
            <p><a href="#contact">Contact</a></p>
            <p className='github-icon'>
                <a href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
                    <Image 
                        src={gitHubLogo}
                        width={32}
                        alt={'github'}>
                    </Image>
                </a>
            </p>
            <p className='linkedin-icon'>
                <a href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
                    <Image 
                        src={linkedInLogo}
                        width={34}
                        alt={'linked in'}>
                    </Image>
                </a>
            </p>
        </div>
    )
}

const NavBarSide = () => {
    return (
        <div>
            <p><a href="#skills">Skills</a></p>
            <p><a href='#projects'>Projects</a></p>
            <p><a href="Marshal Burton Resume 2024.pdf" target='_blank' rel="noreferrer"><button>Resume</button></a></p>
            <p><a href="#contact">Contact</a></p>
            <p className='github-text' >
                <a href="https://github.com/burtonmars" target='_blank' rel="noreferrer">
                    Github
                </a>
            </p>
            <p className='linkedin-text' >
                <a href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
                    Linkedin
                </a>
            </p>
        </div>
    );
}


const NavBar = () => {
  return (
    <div className='flex w-2/6 items-center m-10'>
        <NavBarFull />
    </div>
  )
}

export default NavBar