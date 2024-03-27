import React from 'react';

import { FESkillsList, BESkillsList, LangSkillsList } from '../data/skill';

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col justify-center items-center w-full lg:w-5/6 h-full'>
      <h1 className='text-xl xl:text-2xl xxl:text-3xl mb-12'>Skills</h1>
      <div className='flex flex-col justify-around w-full lg:w-4/5 md:flex-row xl:w-3/5 xxl:w-3/6'>
        <div className='flex flex-col justify-start'>
          <h1 className='flex flex-col items-center my-4 text-2xl xl:text-3xl xxl:text-4xl'>Languages</h1>
          <ul className='flex flex-col items-center text-lg xl:text-xl xxl:text-2xl'>
              {LangSkillsList.map((skill, i) => (
                  <li key={i}>{skill}</li>
              ))}
          </ul>
        </div>
        <div className='flex flex-col justify-start'>
            <h1 className='flex flex-col items-center my-4 text-2xl xl:text-3xl xxl:text-4xl'>Frontend</h1>
            <ul className='flex flex-col items-center text-lg xl:text-xl xxl:text-2xl'>
                {FESkillsList.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col justify-start'>
            <h1 className='flex flex-col items-center my-4 text-2xl xl:text-3xl xxl:text-4xl'>Backend</h1>
            <ul className='flex flex-col items-center text-lg xl:text-xl xxl:text-2xl'>
                {BESkillsList.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills