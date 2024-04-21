'use client';

import Link from 'next/link';

const LandingCard = () => {
  return (
    <div className='flex flex-col justify-center h-full max-w-full w-full md:w-5/6'>
        <div className="card-body flex flex-col justify-center items-center gap-6">
            <h2 className='text-center text-xl md:text-2xl xxl:text-3xl'>Marshal Burton</h2>
            <h1 className='text-center text-2xl md:text-3xl xxl:text-4xl font-bold'>Full Stack Developer</h1>
            <h3 className='text-center text-xl xxl:text-2xl'>I am a passionate developer and life-long learner who strives to combine the best software design practices with innovative and creative solutions.</h3>
            <Link className='btn btn-primary btn-lg mt-6 text-black font-bold' href={'#projects'}>view my creations</Link>  
        </div>
    </div>
  )
}

export default LandingCard;