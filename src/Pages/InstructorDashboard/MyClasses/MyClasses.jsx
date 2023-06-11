import React from "react";

const MyClasses = ({ instructorClasses }) => {

  

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>My Classes</h2>
      <table className='min-w-full border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='py-2 px-4 border-b'>Class Name</th>
            <th className='py-2 px-4 border-b'>Status</th>
            <th className='py-2 px-4 border-b'>Total Enrolled Students</th>
            <th className='py-2 px-4 border-b'>Feedback</th>
            <th className='py-2 px-4 border-b'></th>
          </tr>
        </thead>
        <tbody>
          {instructorClasses.map((classItem) => (
            <tr key={classItem.id}>
              <td className='py-2 px-4 border-b'>{classItem.className}</td>
              <td className='py-2 px-4 border-b'>{classItem.status}</td>
              <td className='py-2 px-4 border-b'>
                {classItem.totalEnrolledStudents}
              </td>
              <td className='py-2 px-4 border-b'>{classItem.feedback}</td>
              <td className='py-2 px-4 border-b'>
                <button className='text-blue-500 hover:text-blue-700'>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
