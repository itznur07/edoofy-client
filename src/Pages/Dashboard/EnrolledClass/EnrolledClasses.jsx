import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const EnrolledClasses = () => {
  const [enrolledclsses] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNjg2MjM0NTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Digital Marketing Mastery",
      students: 85,
      instructor: "Habib Khan",
      price: 90,
    },

    {
      image:
        "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjIzNTI4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Advance Ethical Hacking",
      students: 65,
      instructor: "Sabit Khan",

      price: 75,
    },

    {
      image:
        "https://images.hdqwalls.com/wallpapers/bthumb/python-logo-4k-i6.jpg",
      name: "Python Programming",
      students: 50,
      instructor: "Rasid Khan",

      price: 250,
    },
  ]);

  return (
    <div>
      {/* For Cart Page Headings here  */}
      <div className='flex items-center justify-between container mx-auto p-4 uppercase'>
        <h1 className='text-xl font-bold'>
          Total Enrolled: {enrolledclsses.length}
        </h1>
      </div>
      {/* For Cart Page Headings ends here */}

      {/* Tableuer Cart Content here */}
      <div className='container mx-auto p-4 text-sm font-medium'>
        {enrolledclsses.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-[#49BBBD] h-14'>
              <tr className='text-white font-medium text-lg'>
                <th className='py-2 px-4 border-b'>No.</th>
                <th className='py-2 px-4 border-b'>Class</th>
                <th className='py-2 px-4 border-b'>Instructor</th>
                <th className='py-2 px-4 border-b'>Price</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {enrolledclsses.map((selectedClass, index) => (
                <tr key={index} className='text-center'>
                  <td className='py-4 px-4 border-b'>{index + 1}</td>
                  <td className='py-4 px-4 border-b'>{selectedClass?.name}</td>
                  <td className='py-4 px-4 border-b'>
                    {selectedClass?.instructor}
                  </td>
                  <td className='py-4 px-4 border-b'>
                    ${selectedClass?.price}
                  </td>
                  <td className='py-4 px-4 flex justify-center items-center space-x-3'>
                    <button
                      className='text-[#49BBBD] hover:text-red-700'
                      //   onClick={() => removeFromCart(item._id)}
                    >
                      <FaTrash size={16}></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EnrolledClasses;
