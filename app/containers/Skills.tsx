import React from 'react';

import FrontEndSkills from '../components/FrontEndSkills';
import BackEndSkills from '../components/BackEndSkills';

const Skills = () => {
  return (
    <div className='flex justify-between w-4/5 h-5/6'>
        <div>
            <FrontEndSkills />
        </div>
        <div>
            <BackEndSkills />
        </div>
    </div>
  )
}

export default Skills