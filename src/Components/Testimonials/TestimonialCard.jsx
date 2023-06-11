import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ image, name, feedback }) => {
  return (
    <div
      className='rounded  shadow-lg  bg-gradient-to-r from-yellow-400 to-red-500 
    transform transition duration-500 hover:scale-105'
    >
      <div className='w-full h-72 relative'>
        <img
          className='w-full h-full object-cover opacity-75'
          src={image}
          alt={name}
        />
        <div className='absolute bottom-0 left-0 right-0 px-6 py-4 bg-white  items-center justify-between'>
          <div className='font-bold text-xl text-purple-600'>{name}</div>
          <p className='text-gray-700 text-base flex items-center'>
            <FaQuoteLeft className='text-yellow-400 mr-2' />
            {feedback}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
