import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaInbox, FaUser } from "react-icons/fa";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='container mx-auto px-4 py-8 bg-gradient-to-r from-[#49BBBD] to-[#4f5353]'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <motion.h1
        className='text-3xl uppercase font-bold text-white mb-4 text-center'
        variants={formVariants}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className='text-white text-base mb-8 text-center'
        variants={formVariants}
      >
        Have any questions or feedback? We would love to hear from you.
      </motion.p>
      <motion.form
        className='max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8'
        variants={formVariants}
      >
        <div className='mb-4'>
          <div className='flex items-center mb-2'>
            <FaUser className='text-gray-700 mr-2' />
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor='name'
            >
              Name
            </label>{" "}
          </div>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto'
            id='name'
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <div className='flex items-center mb-2'>
            <FaEnvelope className='text-gray-700 mr-2' />
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor='email'
            >
              Email
            </label>{" "}
          </div>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto'
            id='email'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-6'>
          <div className='flex items-center mb-3'>
            <FaInbox className='text-gray-700 mr-2' />
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor='message'
            >
              Message
            </label>{" "}
          </div>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 ml-auto'
            id='message'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='w-full bg-[#49BBBD] hover:bg-[#00c0c3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Send
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
