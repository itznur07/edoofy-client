import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const ManageUsers = () => {
  /** State and hooks */
  const [disabledButtons, setDisabledButtons] = useState([]);

  /** Get data using tanstack query */
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });

  /** Make instuctor an admin oparetions */

  const makeInstructor = (userId) => {
    // Perform API request or database update to make the user an instructor
    // Update the user role in the users state or refetch the updated user list
    setDisabledButtons([...disabledButtons, userId]);
  };

  const makeAdmin = (userId) => {
    // Perform API request or database update to make the user an admin
    // Update the user role in the users state or refetch the updated user list
    setDisabledButtons([...disabledButtons, userId]);
  };

  return (
    <div>
      <div>
        <h2 className='text-2xl font-bold mb-8'>
          <SectionTitle title='Manage Users'></SectionTitle>
        </h2>
        <table className='min-w-full border border-gray-300'>
          <thead>
            <tr className='bg-[#49BBBD] text-white font-bold text-lg'>
              <th className='py-3 px-4 border-b'>No</th>
              <th className='py-3 px-4 border-b'>Name</th>
              <th className='py-3 px-4 border-b'>Email</th>
              <th className='py-3 px-4 border-b'>Role</th>
              <th className='py-3 px-4 border-b'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user.id} className='text-center'>
                <td className='py-2 px-4 border-b'>{i + 1}</td>
                <td className='py-2 px-4 border-b'>{user.name}</td>
                <td className='py-2 px-4 border-b'>{user.email}</td>
                <td className='py-2 px-4 border-b font-bold'>{user.role}</td>
                <td className='py-2 px-4 border-b'>
                  {!disabledButtons.includes(user.id) && (
                    <div>
                      {user?.role === "admin" ? (
                        <button className='bg-[#49BBBD] text-white font-medium py-1 px-2 rounded'>
                          you / admin
                        </button>
                      ) : (
                        <div className='space-x-2'>
                          <button
                            className={`bg-[#046866] text-white font-medium py-1 px-2 rounded `}
                            onClick={() => makeInstructor(user.id)}
                          >
                            Make Instructor
                          </button>
                          <button
                            className='bg-[#49BBBD] text-white font-medium py-1 px-2 rounded'
                            onClick={() => makeAdmin(user.id)}
                          >
                            Make Admin
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
