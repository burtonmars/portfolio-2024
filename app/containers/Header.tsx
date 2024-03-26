import React from 'react';

import NavBar from '../components/NavBar';
import Socials from '../components/Socials';

const Header = () => {
  return (
    <div className='flex w-2/5 justify-between items-center'>
      <div  className='w-3/5'>
        <NavBar />
      </div>
      <div className='w-1/5'>
        <Socials />
      </div>
    </div>
  );
};

export default Header;