import React from 'react';

import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactCard = () => {
  return (
    <div className='flex justify-center h-full w-full lg:w-5/6 xl:w-3/5'>
        <div className='hidden md:flex items-center flex-3 bg-white md:rounded-l-lg'>
            <ContactInfo />
        </div>
        <div 
          className='relative flex w-full justify-center items-center flex-1 md:rounded-r-lg bg-accent bg-cover bg-center'>
            <div className='absolute inset-0 bg-white bg-opacity-20'></div>
            <div className='z-10 p-4 w-full'>
                <EmailForm />
            </div>
        </div>
    </div>
  );
};

export default ContactCard;