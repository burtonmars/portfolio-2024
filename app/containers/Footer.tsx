import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-col justify-around items-center w-full min-h-36 bg-background text-slate-400'>
      <div className='text-xl'>
        <button>
          <Link href="#header">return to top</Link>
        </button>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p>© 2024 Marshal Burton</p>
        <p>Illustration(s) from <a target="_blank" href="https://absurd.design/">absurd.design</a></p>
      </div>
    </div>
  );
};

export default Footer;