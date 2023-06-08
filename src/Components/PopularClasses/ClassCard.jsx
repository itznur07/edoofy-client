import React from "react";

// A component that renders a single class card
const ClassCard = ({ cls }) => {
  console.log(cls);
  return (
    <div className='md:mx-0 mx-5 rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={cls?.image} alt={cls?.name} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{cls?.name}</div>
        <p className='text-gray-700 text-base'>
          {cls?.students} students enrolled
        </p>
      </div>
    </div>
  );
};

export default ClassCard;
