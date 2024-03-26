import React from 'react';
import Image from 'next/image';

import LandingCard from '../components/LandingCard';
import workFromHome from '../../public/S5_Working-from-Home.webp';

const LandingPage = () => {
  return (
    <div className='flex justify-center'>
        <div>
            <LandingCard />
        </div>
        <div>
            <Image 
                src={workFromHome}
                priority={true}
                height={500}
                alt={'man working at computer desk in home office'}>
            </Image>
        </div>
    </div>
  );
};

export default LandingPage;