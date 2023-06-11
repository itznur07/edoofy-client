import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { FaArrowRight, FaBookmark, FaCheck, FaHome, FaHouseUser, FaWindowClose } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";
import DashboardNav from "../Shared/DashboardNav/DashboardNav";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  /** Get data using tanstack query */
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });

  /** Filtering for exect user */
  const exectUser = users.filter((u) => u?.email === user?.email);

  /** Sidebar Condition */
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg text-slate-500 w-64 min-h-screen ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Header */}
        <div className='p-4'>
          <img className='w-32' src={logo} alt='logo' />
        </div>

        {/* Sidebar Navigation */}
        <nav className='px-4 md:mt-5'>
          <ul className='space-y-2'>
            {/* Sidebar links for admin */}
            {exectUser[0]?.role === "admin" && (
              <>
                <li>
                  <Link
                    to='/dashboard/adminhome'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700'
                  >
                    <span>
                      <FaHome size={24} />
                    </span>{" "}
                    <span>Admin Home</span>
                  </Link>
                </li>
                {/* Add more admin links */}
              </>
            )}

            {/* Sidebar links for student */}
            {exectUser[0]?.role !== "admin" && (
              <>
                <li>
                  <Link
                    to='/dashboard/userhome'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaHouseUser size={22} />
                    </span>{" "}
                    <span>User Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/selectedclasses'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaCheck size={22} />
                    </span>{" "}
                    <span>Selected Classes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/enrolledclsses'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaBookmark size={22} />
                    </span>{" "}
                    <span>Enrolled Classes</span>
                  </Link>
                </li>
                {/* Add more student links */}
              </>
            )}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <hr className='my-10' />
        <DashboardNav />
      </div>

      {/* Main Content */}
      <div className='flex-grow'>
        {/* Toggle Button */}
        <button
          className='bg-[#ffffff] text-[#49BBBD] p-2'
          onClick={toggleSidebar}
        >
          {isOpen ? <FaWindowClose size={24} /> : <FaArrowRight size={24} />}
        </button>

        <Outlet />

        {/* Content */}
        <div className='p-4'>
          {/* Your page content goes here */}
          <h2 className='text-2xl font-bold'></h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
