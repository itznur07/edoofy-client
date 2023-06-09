import React from "react";

const InstructorCard = ({ instructor }) => {
  return (
    <div className='md:my-0 md:mx-0 my-4 mx-3 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer'>
      <div className='w-full h-64 bg-gradient-to-r from-green-400 to-blue-500'>
        <img
          className='w-full h-full object-cover opacity-75'
          src={instructor?.image}
          alt={instructor?.name}
        />
      </div>
      <div className='px-6 py-4 bg-white flex items-center justify-between'>
        <div className='font-semibold text-xl text-[#3d3d3d]'>
          {instructor?.name}
        </div>
        <div className='flex items-center text-yellow-400'>
          <p className='text-gray-700 text-base ml-2'>
            {instructor?.classes} classes taught
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
