'use client';

import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

interface EmailFormProps {
  isInDarkMode: boolean;
}

const EmailForm = ({ isInDarkMode }: EmailFormProps) => {
  const form = React.useRef<HTMLFormElement | null>(null);
  const emailAddress = React.useRef<HTMLInputElement | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
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

  useEffect(() => {
    let timeoutId: number | NodeJS.Timeout | undefined;

    if (isSubmitted) {
      timeoutId = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSubmitted]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Name must be 50 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .max(10000, "Message too long")
        .trim().required("Email body cannot be empty")
    }),
     onSubmit: (_, { resetForm }) => {
       form.current && emailjs.sendForm('service_zyrd0oc', 'template_nw30byf', form.current, {
        publicKey: '-8TJ-XdU92RyFs0K-',
      })
        .then(() => {
          setIsSubmitted(true);
          resetForm();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  });

  return (
    <div className='w-full'>
      <form 
        ref={form}
        onSubmit={formik.handleSubmit}
        className='items-center justify-center w-full'>
        <div className='flex-[2_2_0%] p-5 md:p-20'>
          <h1 className='text-3xl pb-2 font-bold' style={{ color: inputFontColor }}>Contact</h1>
          <p className='text-lg ' style={{ color: inputFontColor }}>send me an email if you want to connect</p>
          <div className='mt-6'>
            {/* name input */}
            <div className='pb-4' style={{ color: inputFontColor }}>
              <label className={`block font-bold text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-red-500" : ""}`} 
                htmlFor="name">
                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
              </label>
              <input className='border-2 border-gray-500 p-2 rounded-md w-full text-textPrimary' 
                      type="text"
                      name='name'
                      id="name" 
                      placeholder='Enter your name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ color: inputFontColor }}
                      />
            </div>
            {/* email input */}
            <div className='pb-4 ' style={{ color: inputFontColor }}>
              <label className={`block font-bold text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-red-500" : ""}`} htmlFor="email">
                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
              </label>
              <input ref={emailAddress} className='border-2 border-gray-500 p-2 rounded-md w-full' 
                      type="email" 
                      name="email"
                      id="email" 
                      placeholder='Enter your email address'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
            </div>
            {/* message input */}
            <div className='pb-4' style={{ color: inputFontColor }}>
              <label className={`block font-bold text-sm pb-2 ${formik.touched.message && formik.errors.message ? "text-red-500" : ""}`} htmlFor="message">
                {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}
              </label>
              <textarea className='border-2 border-gray-500 p-2 rounded-md w-full'
                      id="message"
                      name="message"
                      placeholder='Enter your email body'
                      rows={5}
                      value={formik.values.message}
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur}
                      />
            </div>
          </div>
          {/* submit-button */}
          <div className="w-full flex justify-center items-center">
            <button type='submit' className='btn btn-primary btn-lg w-2/6 text-md text-black' value="Send">Send</button>
          </div>
        </div>
      </form>
      {isSubmitted && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-green-300 text-black text-center p-6 w-1/5 rounded-lg z-50">
        <p>Success! Thanks for your email.</p>
      </div>
      )}
    </div>
  )
}

export default EmailForm