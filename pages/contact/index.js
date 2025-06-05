'use client';

import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uj7kedq',       // replace with your EmailJS service ID
        'template_99jhh7h',      // replace with your template ID
        formRef.current,
        'lQ5L3WxBdGNmW5Ket'        // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccess(true);
          setError('');
          formRef.current.reset();
        },
        (error) => {
          setError('Something went wrong. Try again.');
          setSuccess(false);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input name="user_name" type="text" placeholder="name" className="input" required />
              <input name="user_email" type="email" placeholder="email" className="input lowercase" required />
            </div>
            <input name="subject" type="text" placeholder="subject" className="input" autoCapitalize="off" required />
            <textarea name="message" placeholder="message" className="textarea" required></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            {success && <p className="text-green-500 mt-4 text-sm">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
