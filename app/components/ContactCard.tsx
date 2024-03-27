import React from 'react';

import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactCard = () => {
  return (
    <div className='flex w-5/6 xl:w-4/6 justify-center bg-slate-100'>
        <div className='flex-3 bg-slate-300'>
            <ContactInfo />
        </div>
        <div className='flex-1 bg-slate-200'>
            <EmailForm />
        </div>
    </div>
  );
};

export default ContactCard;