'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { FESkillsList, BESkillsList, OtherSkillsList } from '../data/skill';
import absurdDesignHourglassesDarkmode from '../../public/absurd-hourglass-glasses-darkmode.png';
import absurdDesignHourglassesLightmode from '../../public/absurd-hourglass-glasses-lightmode.png';
import absurdDesignLightbulbTreeDarkmode from '../../public/absurd-lightbulb-tree-darkmode.png';
import absurdDesignLightbulbTreeLightmode from '../../public/absurd-lightbulb-tree-lightmode.png';
import absurdDesignPaintbrushDarkmode from '../../public/absurd-paintbrush-darkmode.png';
import absurdDesignPaintbrushLightmode from '../../public/absurd-paintbrush-lightmode.png';

const Skills = () => {
  const [lightbulbTreeImage, setLightbulbTreeImage] = useState(absurdDesignLightbulbTreeLightmode);
  const [hourglassesImage, setHourglassesImage] = useState(absurdDesignHourglassesLightmode);
  const [paintbrushPaletteImage, setPaintbrushPaletteImage] = useState(absurdDesignPaintbrushLightmode);

  useEffect(() => {
      const updateIsInDarkmode = () => {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              setHourglassesImage(absurdDesignHourglassesDarkmode);
              setLightbulbTreeImage(absurdDesignLightbulbTreeDarkmode);
              setPaintbrushPaletteImage(absurdDesignPaintbrushDarkmode);
          } else {
              setHourglassesImage(absurdDesignHourglassesLightmode);
              setLightbulbTreeImage(absurdDesignLightbulbTreeLightmode);
              setPaintbrushPaletteImage(absurdDesignPaintbrushLightmode);
          }
      };

      updateIsInDarkmode();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateIsInDarkmode);

      return () => {
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateIsInDarkmode);
      };
  }, []);

  return (
    <div id='skills' className='flex flex-col justify-center items-center h-fit w-full lg:w-3/5 gap-24 mb-24 lg:mb-72'>
      <h1 className='text-2xl xl:text-3xl xxl:text-4xl mb-12 w-full text-center font-bold gap-48'>Technology and Skills</h1>
      <div className='flex flex-col justify-center items-center w-full h-full gap-72'>
        <div className='flex justify-around items-center gap-8 w-full h-full'>
          <div className='w-full h-full flex justify-center items-center'>
            <Image 
              src={hourglassesImage} 
              alt={''}
              height={450}>
            </Image>
          </div>
          <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
            <div className="relative text-center h-full w-full">
              <h2 className="text-2xl xl:text-3xl xxl:text-4xl z-10 relative">Front End</h2>
            </div>
            <div className='mt-16'>
              <div className='flex flex-wrap justify-center items-center gap-12 text-lg xl:text-xl xxl:text-2xl'>
                  {FESkillsList.map((skill, i) => (
                      <div key={i} className='flex flex-col justify-center items-center gap-4'>
                          <Image 
                              src={skill.icon}
                              alt={skill.name}
                              width={70}
                              height={45}
                          />
                          <div className='text-md lg:text-lg'>
                            {skill.name}
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-around items-center gap-8 w-full'>
          <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
            <div>
              <h2 className='text-2xl xl:text-3xl xxl:text-4xl text-center'>Back End</h2>
            </div>
            <div className='mt-16'>
              <div className='flex flex-wrap justify-center items-center gap-12 text-lg xl:text-xl xxl:text-2xl'>
                {BESkillsList.map((skill, i) => (
                    <div key={i} className='flex flex-col justify-center items-center gap-4'>
                          <Image 
                              src={skill.icon}
                              alt={skill.name}
                              width={70}
                              height={45}
                          />
                          <div className='text-md lg:text-lg'>
                            {skill.name}
                          </div>
                      </div>
                ))}
              </div>
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
        <div className='flex justify-around items-center gap-8 w-full h-full'>
          <div className='w-full h-full flex justify-center items-center'>
            <Image 
              src={paintbrushPaletteImage} 
              alt={''}
              height={450}>
            </Image>
          </div>
          <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
            <div>
              <h2 className='text-2xl xl:text-3xl xxl:text-4xl text-center'>Other Tools</h2>
            </div>
            <div className='mt-16'>
              <div className='flex flex-wrap justify-center items-center gap-12 text-lg xl:text-xl xxl:text-2xl'>
                  {OtherSkillsList.map((skill, i) => (
                      <div key={i} className='flex flex-col justify-center items-center gap-4'>
                          <Image 
                              src={skill.icon}
                              alt={skill.name}
                              width={70}
                              height={45}
                          />
                          <div className='text-md lg:text-lg'>
                            {skill.name}
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills