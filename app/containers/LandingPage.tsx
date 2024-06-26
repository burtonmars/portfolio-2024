'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";

import LandingCard from '../components/LandingCard';
import absurdDesignLightbulbHeadLightmode from '../../public/absurd-lightbulb-head-lightmode.png';
import absurdDesignLightbulbHeadDarkmode from '../../public/absurd-lightbulb-head-darkmode.png';
import backgroundBlobLightMode from '../../public/blob-haikei-lightmode.svg';
import backgroundBlobDarkMode from '../../public/blob-haikei-darkmode.svg';

const LandingPage = () => {
    const [imageSrc, setImageSrc] = useState(absurdDesignLightbulbHeadLightmode);
    const [backgroundBlob, setBackgroundBlob] = useState(backgroundBlobLightMode);

    useEffect(() => {
        const updateImagesForColorScheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setImageSrc(absurdDesignLightbulbHeadDarkmode);
                setBackgroundBlob(backgroundBlobDarkMode);
            } else {
                setImageSrc(absurdDesignLightbulbHeadLightmode);
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
        <div id='landing' className='flex justify-center items-center h-full w-full'>
            <div className='my-12 md:my-0 h-full w-full md:w-2/6 flex justify-center items-center'>
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
                    width={450}
                />
            </div>
        </div>
    );
};

export default LandingPage;
