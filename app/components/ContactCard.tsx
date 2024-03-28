import React from 'react';

import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactCard = () => {
  return (
    <div className='flex justify-center h- w-full lg:w-5/6 xl:w-3/5'>
        <div className='hidden md:flex items-center flex-3 bg-accent md:rounded-l-lg'>
            <ContactInfo />
        </div>
        <div className='flex w-full justify-center items-center flex-1 bg-themeGrey md:rounded-r-lg'>
            <EmailForm />
        </div>
    </div>
  );
};

export default ContactCard;