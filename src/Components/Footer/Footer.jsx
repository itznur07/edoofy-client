import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      {" "}
      <footer className=' text-white max-w-7xl mx-auto'>
        <div className=' py-4 flex flex-wrap justify-between items-center'>
          {/* Footer top */}
          <div className='flex items-center space-x-4'>
            {/* Logo */}
            <img src='/logo.png' alt='Logo' className='h-12' />
            {/* Tagline */}
            <p className='text-sm font-semibold'>
              The best place to find your next adventure
            </p>
          </div>
          {/* Footer middle */}
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            {/* Newsletter input field */}
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {/* Subscribe button */}
            <button
              type='button'
              className='bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition duration-300'
            >
              Subscribe
            </button>
            {/* Text */}
            <p className='text-sm font-semibold'>Subscribe to our newsletter</p>
          </div>
        </div>
        {/* Footer bottom */}
        <div className='container mx-auto px-4 py-4 border-t border-gray-700 flex flex-wrap justify-between items-center'>
          {/* Links */}
          <ul className='flex space-x-4 text-sm font-semibold'>
            <li>
              <a
                href='/career'
                className='hover:text-blue-500 transition duration-300'
              >
                Career
              </a>
            </li>
            <li>
              <a
                href='/privacy'
                className='hover:text-blue-500 transition duration-300'
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href='/terms'
                className='hover:text-blue-500 transition duration-300'
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
          {/* Icons */}
          <ul className='flex space-x-4 text-xl'>
            <li>
              <a
                href='/facebook'
                className='hover:text-blue-500 transition duration-300'
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href='/twitter'
                className='hover:text-blue-500 transition duration-300'
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href='/instagram'
                className='hover:text-blue-500 transition duration-300'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
          {/* Copyrigth */}
          <p className='text-sm font-semibold'>
            &copy; 2023 Material Tailwind. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
