'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { FESkillsList, BESkillsList } from '../data/skill';
import absurdDesignHourglassesDarkmode from '../../public/absurd-hourglass-glasses-darkmode.png';
import absurdDesignHourglassesLightmode from '../../public/absurd-hourglass-glasses-lightmode.png';
import absurdDesignLightbulbTreeDarkmode from '../../public/absurd-lightbulb-tree-darkmode.png';
import absurdDesignLightbulbTreeLightmode from '../../public/absurd-lightbulb-tree-lightmode.png';

const Skills = () => {
  const [lightbulbTreeImage, setLightbulbTreeImage] = useState(absurdDesignLightbulbTreeLightmode);
  const [hourglassesImage, setHourglassesImage] = useState(absurdDesignHourglassesLightmode);


  useEffect(() => {
      const updateIsInDarkmode = () => {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              setHourglassesImage(absurdDesignHourglassesDarkmode);
              setLightbulbTreeImage(absurdDesignLightbulbTreeDarkmode);
          } else {
              setHourglassesImage(absurdDesignHourglassesLightmode);
              setLightbulbTreeImage(absurdDesignLightbulbTreeLightmode);
          }
      };

      updateIsInDarkmode();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateIsInDarkmode);

      return () => {
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateIsInDarkmode);
      };
  }, []);

  return (
    <div id='skills' className='flex flex-col justify-center items-center h-fit w-3/5 gap-24 mb-24 lg:mb-72'>
      <h1 className='text-2xl xl:text-3xl xxl:text-4xl mb-12 w-full text-center font-bold gap-48'>Technology and Skills</h1>
      <div className='flex flex-col justify-center items-center w-full h-full gap-48'>
        <div className='flex justify-around items-center gap-8 w-full h-full'>
          <div className='w-full h-full flex justify-center items-center'>
            <Image 
              src={hourglassesImage} 
              alt={''}
              height={450}>
            </Image>
          </div>
          <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
            <div>
              <h2 className='text-2xl xl:text-3xl xxl:text-4xl text-center'>Front End</h2>
            </div>
            <div>
              <ul className='flex flex-col items-center text-lg xl:text-xl xxl:text-2xl'>
                {FESkillsList.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-around items-center gap-8 w-full'>
          <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
            <div>
              <h2 className='text-2xl xl:text-3xl xxl:text-4xl text-center'>Back End</h2>
            </div>
            <div>
              <ul className='flex flex-col items-center text-lg xl:text-xl xxl:text-2xl'>
                {BESkillsList.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div  className='w-full h-full flex justify-center items-center'>
            <Image 
              src={lightbulbTreeImage} 
              alt={''}
              height={450}>
            </Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills