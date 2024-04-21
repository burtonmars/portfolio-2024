'use client';

import React, { useEffect, useState } from 'react';

import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactCard = () => {
  const [isInDarkMode, setisInDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState({
    emailForm: 'var(--color-theme-accent)' as string,
    contactInfo: 'var(--color-theme-secondary)' as string
  });

  useEffect(() => {
    const updateDarkMode = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setisInDarkMode(true);
      } else {
        setisInDarkMode(false);
      }
    };

    updateDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkMode);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateDarkMode);
    };
  }, []);

  useEffect(() => {
    if (isInDarkMode) {
      setBackgroundColor({
        emailForm: 'var(--color-theme-backgroundSecondaryDark)' as string,
        contactInfo: 'var(--color-theme-accentDark)' as string
      });
    } else {
      setBackgroundColor({
        emailForm: 'var(--color-theme-accent)' as string,
        contactInfo: 'var(--color-theme-secondary)' as string
      });
    }
  }, [isInDarkMode]);
  
  return (
    <div className='flex justify-center h-full w-full lg:w-5/6 xl:w-3/5'>
        <div className='hidden md:flex items-center flex-3 md:rounded-l-lg'
          style={{backgroundColor: backgroundColor.contactInfo}}>
            <ContactInfo isInDarkMode={isInDarkMode} />
        </div>
        <div 
          className='relative flex w-full justify-center items-center flex-1 md:rounded-r-lg'
          style={{backgroundColor: backgroundColor.emailForm}}>
            <div className='absolute inset-0 bg-white bg-opacity-20'></div>
            <div className='z-10 p-4 w-full'>
                <EmailForm isInDarkMode={isInDarkMode}/>
            </div>
        </div>
    </div>
  );
};

export default ContactCard;