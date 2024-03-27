import React from 'react';
import Image from 'next/image';

import LandingCard from '../components/LandingCard';
import workFromHome from '../../public/S5_Working-from-Home.webp';

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center h-full'>
        <div className='h-full w-3/6 flex justify-center items-center'>
            <LandingCard />
        </div>
        <div className='h-full w-3/6 flex justify-center items-center'>
            <Image 
                src={workFromHome}
                priority={true}
                height={650}
                alt={'man working at computer desk in home office'}>
            </Image>
        </div>
    </div>
  );
};

export default LandingPage;