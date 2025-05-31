import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { styles } from '../styles/';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const ContactForm = () => {
  const formRef = useRef();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      alert('reCAPTCHA not yet available');
      return;
    }
    
    setLoading(true);

    try {
      // Execute reCAPTCHA
      const token = await executeRecaptcha('submit_contact_form');
      
      // For now, we'll send the form with emailjs
      // In production, you should verify the token on your backend
      emailjs.send(
        'service_l6xx2x3',
        'template_2p5r8o7',
        {
          from_name: form.name,
          to_name: 'Michael',
          from_email: form.email,
          to_email: 'mikegauci@gmail.com',
          message: form.message,
          recaptcha_token: token, // Include token for backend verification if needed
        },
        '5c_MeTTACsPf5dLP5'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you for submitting the form, I will get back to you as soon as I can!');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        setLoading(false);
        console.log(error);
        alert('There was an error sending your message, please try again later.');
      })
    } catch (error) {
      setLoading(false);
      console.error('reCAPTCHA error:', error);
      alert('reCAPTCHA verification failed. Please try again.');
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='type'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter your message...'
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[5500px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const Contact = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      language="en"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
};

export default SectionWrapper(Contact, "contact")