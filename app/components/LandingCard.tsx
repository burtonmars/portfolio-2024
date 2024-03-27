'use client';

import React, { useEffect, useRef } from 'react';''

const LandingCard = () => {
  const ctaButton = useRef(null);

  useEffect(() => {
    const button = ctaButton.current;

    // button.addEventListener('mouseenter', handleMouseEnter);
    // button.addEventListener('mouseleave', handleMouseLeave);

    // function handleMouseEnter() {
    //   TweenMax.to(button, 0.3, { scale: 1.1 });
    // }

    // function handleMouseLeave() {
    //   TweenMax.to(button, 0.3, { scale: 1 });
    // }

    // return () => {
    //   button.removeEventListener('mouseenter', handleMouseEnter);
    //   button.removeEventListener('mouseleave', handleMouseLeave);
    // };
  }, []);

  return (
    <div className='flex flex-col justify-center card h-4/6'>
        <div className="card-body flex flex-col justify-center items-center">
            <h2 className='text-xl'>Marshal Burton</h2>
            <h1 className='text-2xl font-bold'>Full Stack Developer</h1>
            <h3 className='text-center text-lg'>I am a passionate developer and life-long learner who strives to combine best software design practices with innovative and creative solutions.</h3>
            <button className='btn btn-primary btn-lg mt-6'>My Work</button>  
        </div>
    </div>
  )
}

export default LandingCard