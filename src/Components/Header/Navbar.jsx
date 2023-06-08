import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <div>
      <nav className='bg-white'>
        <div className='max-w-7xl mx-auto md:px-0 px-5'>
          <div className='flex justify-between'>
            <div className='flex space-x-7'>
              <div>
                {/* Website Logo */}
                <Link to='/' className='flex items-center py-4 '>
                  <span className='font-bold text-[#49BBBD] text-xl'>
                    Edoofy
                  </span>
                </Link>
              </div>
              {/* Primary Navbar items */}
              <div className='hidden md:flex items-center space-x-1'>
                <Link
                  to='/'
                  className='py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-b-4 hover:border-[#49BBBD]'
                >
                  Home
                </Link>
                <Link
                  to='/instructors'
                  className='py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-b-4 hover:border-[#49BBBD]'
                >
                  Instructors
                </Link>
                <Link
                  to='/classes'
                  className='py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-b-4 hover:border-[#49BBBD]'
                >
                  Classes
                </Link>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div className='hidden md:flex items-center space-x-3 '>
              {/* Conditional rendering of Dashboard and Login button */}
              {user === true ? (
                <>
                  <Link
                    to='/dashboard'
                    className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300'
                  >
                    Dashboard
                  </Link>
                  <FaUserCircle size={40} />
                </>
              ) : (
                <Link
                  to='/login'
                  className='py-2 px-4 font-medium text-white bg-[#49BBBD] rounded hover:bg-blue-400 transition duration-300'
                >
                  Login
                </Link>
              )}
            </div>
            {/* Mobile menu button */}
            <div className='md:hidden flex items-center'>
              <button
                className='outline-none mobile-menu-button'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className=' w-6 h-6 text-gray-500 hover:text-blue-500 '
                  x-show='!showMenu'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "" : "hidden"
          } mobile-menu md:hidden bg-white shadow-lg`}
        >
          <ul className=''>
            <li className='active'>
              <Link
                to='/'
                className='block text-sm px-2 py-4 text-white bg-blue-500 font-semibold'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/instructors'
                className='block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300 font-semibold'
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link
                to='/classes'
                className='block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300 font-semibold'
              >
                Classes
              </Link>
            </li>

            {user === false ? (
              <>
                <li>
                  <Link
                    to='/dashboard'
                    className='block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300 font-semibold'
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <FaUserCircle size={40} />
                </li>
              </>
            ) : (
              <li>
                <Link
                  to='/login'
                  className='block text-sm px-2 py-4 text-white bg-blue-500 font-semibold'
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
