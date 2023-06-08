import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const NotFound = () => {

  useTitle("404");

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img
        src='https://cdn.dribbble.com/users/2480087/screenshots/7009361/media/5be4690e38762fd53647912018e86189.gif'
        alt='404 Page Not Found'
        className='max-w-full'
      />
      <Link
        to='/'
        className='absolute border border-[#49BBBD] bottom-28 px-4 py-2 rounded text-[#49BBBD] hover:text-slate-500'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
