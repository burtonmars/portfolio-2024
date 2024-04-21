'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import LandingCard from '../components/LandingCard';
import absurdDesignLightbulbHeadBlack from '../../public/absurd-lightbulb-head-black.png';
import absurdDesignLightbulbHeadWhite from '../../public/absurd-lightbulb-head-white.png';
import backgroundBlobLightMode from '../../public/blob-haikei-lightmode.svg';
import backgroundBlobDarkMode from '../../public/blob-haikei-darkmode.svg';

const LandingPage = () => {
    const [imageSrc, setImageSrc] = useState(absurdDesignLightbulbHeadBlack);
    const [backgroundBlob, setBackgroundBlob] = useState(backgroundBlobLightMode);

    useEffect(() => {
        const updateImagesForColorScheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setImageSrc(absurdDesignLightbulbHeadWhite);
                setBackgroundBlob(backgroundBlobDarkMode);
            } else {
                setImageSrc(absurdDesignLightbulbHeadBlack);
                setBackgroundBlob(backgroundBlobLightMode);
            }
        };

        updateImagesForColorScheme();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateImagesForColorScheme);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateImagesForColorScheme);
        };
    }, []);

    return (
        <div className='flex justify-center items-center h-full'>
            <div className='h-full w-full md:w-2/6 flex justify-center items-center'>
                <LandingCard />
            </div>
            <div className='hidden md:flex h-full w-2/6 justify-center items-center relative'>
                <Image 
                    src={backgroundBlob}
                    layout='fill'
                    objectFit='cover'
                    alt='background blob'
                    className='z-0 opacity-50'
                />
                <Image 
                    src={imageSrc}
                    priority={true}
                    height={450}
                    alt={'whimsical drawing of person with lightbulb head'}
                    className='z-10'
                />
            </div>
        </div>
    );
};

export default LandingPage;
