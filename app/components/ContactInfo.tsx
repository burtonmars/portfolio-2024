'use client';

import React, { useEffect, useState } from 'react';

interface ContactInfoProps {
  isInDarkMode: boolean;
}

const ContactInfo = ({ isInDarkMode }: ContactInfoProps) => {
  const [inputFontColor, setInputFontColor] = useState('#1a1a1a' as string);

  useEffect(() => {
    const updateFontColor = () => {
      if (isInDarkMode) {
        setInputFontColor('#f5f5f5');
      } else {
        setInputFontColor('#1a1a1a');
      }
    };
    updateFontColor();
  }, [isInDarkMode]);
  
  return (
    <div className='p-10 text-sm leading-8' style={{ color: inputFontColor }}>
        <p className='font-bold'>Contact Info</p>
        <p>Phone: 604-446-4461</p>
        <p>email: marshal.t.burton@gmail.com</p>
    </div>
  );
};

export default ContactInfo;