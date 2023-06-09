import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            {/* Website Logo */}
            <Link to='/' className='flex items-center'>
              <img className="w-32" src={logo} alt='logo' />
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {/* Primary Navbar items */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                to='/'
                className='text-gray-500 hover:text-[#49BBBD] px-3 py-2 text-md font-medium'
              >
                Home
              </Link>
              <Link
                to='/instructors'
                className='text-gray-500 hover:text-[#49BBBD] px-3 py-2 text-md font-medium'
              >
                Instructors
              </Link>
              <Link
                to='/classes'
                className='text-gray-500 hover:text-[#49BBBD] px-3 py-2 text-md font-medium'
              >
                Classes
              </Link>
            </div>
            {/* Secondary Navbar items */}
            <div className='hidden md:flex items-center space-x-4'>
              {/* Conditional rendering of Dashboard and Login button */}
              {user ? (
                <>
                  <Link
                    to='/dashboard'
                    className='text-gray-500 hover:bg-blue-500 hover:text-white px-3 py-2 text-md font-medium rounded'
                  >
                    Dashboard
                  </Link>
                  <FaUserCircle size={24} />
                </>
              ) : (
                <Link
                  to='/login'
                  className='text-white bg-[#49BBBD] hover:bg-blue-400 transition duration-300 px-4 py-2 text-md font-medium rounded'
                >
                  Login
                </Link>
              )}
            </div>
            {/* Mobile menu button */}
            <div className='-mr-2 flex md:hidden'>
              <button
                className='text-gray-500 hover:text-blue-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            to='/'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#49BBBD]'
          >
            Home
          </Link>
          <Link
            to='/instructors'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#49BBBD]'
          >
            Instructors
          </Link>
          <Link
            to='/classes'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#49BBBD]'
          >
            Classes
          </Link>
        </div>
        <div className='px-2 py-3 space-y-1'>
          {/* Conditional rendering of Dashboard and Login button */}
          {user ? (
            <>
              <Link
                to='/dashboard'
                className='block text-sm px-3 py-2 text-gray-500 font-medium hover:bg-blue-500 hover:text-white rounded'
              >
                Dashboard
              </Link>
              <FaUserCircle size={24} />
            </>
          ) : (
            <Link
              to='/login'
              className='block text-sm px-3 py-2 text-white bg-[#49BBBD] hover:bg-blue-400 transition duration-300 font-medium rounded'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
