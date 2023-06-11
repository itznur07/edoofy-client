import React from "react";

// A component that renders a section title
const SectionTitle = ({ title }) => {
  return (
    <div className='flex items-center justify-center my-3'>
      <h1 className='text-3xl font-bold text-gray-600 uppercase'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
