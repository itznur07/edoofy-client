import axios from "axios";
import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState();

  /** Data Fecting using axios */
  axios
    .get(`https://server-omega-two.vercel.app/users`)
    .then((response) => {
      // Handle successful response
      const data = response.data;
      const filteredData = data.filter((user) => user?.role === "instructor");
      setInstructors(filteredData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <SectionTitle title='Instructors'></SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:mx-0 mx-3 mt-16'>
        {instructors?.map((instructor) => (
          <div
            key={instructor?._id}
            className='bg-white rounded-lg border-t border-s border-[#49BBBD] shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer p-4 flex flex-col items-center'
          >
            <img
              src={instructor?.photoURL}
              alt={instructor.name}
              className='w-32 h-32 rounded-full mb-4 object-cover'
            />
            <h2 className='text-lg font-bold mb-2'>{instructor.name}</h2>
            <h2 className='text-md font-medium mb-2'>{instructor.role}</h2>
            <p className='text-gray-600 mb-2'>{instructor.email}</p>
            {instructor.numClassesTaken && (
              <p className='text-gray-600 mb-2'>
                Classes taken: {instructor.numClassesTaken}
              </p>
            )}
            {instructor.classesTaken && (
              <div className='mb-4'>
                <p className='text-gray-600 mb-2'>
                  Classes taken: {instructor.classesTaken.join(", ")}
                </p>
              </div>
            )}
            <a
              href={`/classes`}
              className='w-full text-center bg-[#49BBBD] hover:bg-[#085153] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              See Classes
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
