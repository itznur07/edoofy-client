import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import {
  FaArrowRight,
  FaBookmark,
  FaCheck,
  FaHouseUser,
  FaMoneyCheck,
  FaPersonBooth,
  FaPlusCircle,
  FaUsersCog,
  FaVideo,
  FaWindowClose,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../Providers/AuthContext";
import DashboardNav from "../Shared/DashboardNav/DashboardNav";
import logo from "../assets/logo.png";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  /** Get data using tanstack query */
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://server-omega-two.vercel.app/users");
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
            {exectUser[0]?.role === "admin" ? (
              <>
                <li>
                  <Link
                    to='/dashboard/admin/profile'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaHouseUser size={22} />
                    </span>{" "}
                    <span>Admin</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/admin/manageclasses'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaPersonBooth size={22} />
                    </span>{" "}
                    <span>Manage Classes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/admin/manageusers'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaUsersCog size={22} />
                    </span>{" "}
                    <span>Manage Users</span>
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}

            {/* Sidebar links for instructor */}
            {exectUser[0]?.role === "instructor" ? (
              <>
                <li>
                  <Link
                    to='/dashboard/instructor/profile'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaHouseUser size={22} />
                    </span>{" "}
                    <span>Instructor Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/instructor/addclass'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaPlusCircle size={22} />
                    </span>{" "}
                    <span>Add Class</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/instructor/myclasses'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaVideo size={22} />
                    </span>{" "}
                    <span>My Classes</span>
                  </Link>
                </li>
                {/* Add more admin links */}
              </>
            ) : (
              ""
            )}

            {/* Sidebar links for student */}
            {exectUser[0]?.role === "student" ? (
              <>
                <li>
                  <Link
                    to='/dashboard/student/profile'
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
                    to='/dashboard/student/selectedclasses'
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
                    to='/dashboard/student/enrolledclsses'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaBookmark size={22} />
                    </span>{" "}
                    <span>Enrolled Classes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/student/paymenthistory'
                    className='flex items-center space-x-2 py-2 px-4 rounded hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer text-[#49BBBD]'
                  >
                    <span className=''>
                      <FaMoneyCheck size={22} />
                    </span>{" "}
                    <span>Payment History</span>
                  </Link>
                </li>
                {/* Add more student links */}
              </>
            ) : (
              ""
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
