import React from "react";

const ClassCard = ({ cls }) => {
  return (
    <div className='md:mx-0 mx-5 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer '>
      <div className='w-full h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <img
          className='w-full h-full object-cover opacity-75'
          src={cls?.classImage}
          alt={cls?.className}
        />
      </div>
      <div className='px-6 py-4 bg-white'>
        <div className='font-bold text-xl mb-2'>{cls?.className}</div>
        <p className='text-gray-700 text-base'>
          {cls?.enrolledStudents} students enrolled
        </p>
      </div>
    </div>
  );
};

export default ClassCard;
