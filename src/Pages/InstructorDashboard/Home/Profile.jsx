import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthContext";

const InstructorProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-center'>
            <img
              className='w-20 h-20 rounded-full object-cover mr-4'
              src={user?.photoURL}
              alt='User Avatar'
            />
            <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
          </div>
          <div className='mt-4'>
            <p>
              <span className='font-bold'>Email:</span> {user?.email}
            </p>
            <p>
              <span className='font-bold'>Role:</span> Instructor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
