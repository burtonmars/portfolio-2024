import React from 'react';
import Image from 'next/image';

import gitHubLogo from '../../public/github-mark.webp';
import linkedInLogo from '../../public/LI-In-Bug.webp';

const SocialsFull = () => {
    return (
        <div className='flex justify-between items-center bg-slate-100'>
            <p className='github-icon'>
                <a href="https://github.com/burtonmars?tab=repositories" target='_blank' rel="noreferrer">
                    <Image 
                        src={gitHubLogo}
                        width={38}
                        alt={'github'}>
                    </Image>
                </a>
            </p>
            <p className='linkedin-icon'>
                <a href="https://www.linkedin.com/in/marshal-burton/" target='_blank' rel="noreferrer">
                    <Image 
                        src={linkedInLogo}
                        width={40}
                        alt={'linked in'}>
                    </Image>
                </a>
            </p>
        </div>
    )
}

const SocialsSide = () => {
    return (
        <div>
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


const Socials = () => {
  return (
    // todo: add a conditional to render SocialsFull or SocialsSide based on screen size
    <div>
        <SocialsFull />
    </div>
  );
};

export default Socials;