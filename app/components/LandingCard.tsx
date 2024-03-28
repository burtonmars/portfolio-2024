'use client';

import Link from 'next/link';

const LandingCard = () => {
  return (
    <div className='flex flex-col justify-center card h-4/6'>
        <div className="card-body flex flex-col justify-center items-center">
            <h2 className='text-xl'>Marshal Burton</h2>
            <h1 className='text-2xl font-bold'>Full Stack Developer</h1>
            <h3 className='text-center text-lg'>I am a passionate developer and life-long learner who strives to combine best software design practices with innovative and creative solutions.</h3>
            <Link className='btn btn-primary btn-lg mt-6' href={'#projects'}>My Work</Link>  
        </div>
    </div>
  )
}

export default LandingCard