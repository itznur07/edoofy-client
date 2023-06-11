import React from "react";
import { FaHome, FaUsers, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <nav className='px-4 md:mt-5'>
        <ul className='space-y-2'>
          <li>
            <Link
              to='/'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
            >
              <span>
                <FaHome size={22} />
              </span>{" "}
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to='/instructors'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
            >
              <span>
                <FaUsers size={22} />
              </span>{" "}
              <span>Instructors</span>
            </Link>
          </li>
          <li>
            <Link
              to='/classes'
              className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
            >
              <span>
                <FaVideo size={22} />
              </span>{" "}
              <span>Classes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
