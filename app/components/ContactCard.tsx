import React from 'react';

import EmailForm from './EmailForm';
import ContactInfo from './ContactInfo';

const ContactCard = () => {
  return (
    <div className='flex w-5/6 justify-center bg-slate-100'>
        <div>
            <ContactInfo />
        </div>
        <div>
            <EmailForm />
        </div>
    </div>
  );
};

export default ContactCard;