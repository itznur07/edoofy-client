import React, { useState } from "react";
import { FaMoneyBill, FaTrash } from "react-icons/fa";

const SelectedClasses = () => {
  const [selectedClasses] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY4NjIzNDkxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "PHero MERN Stack Course",
      students: 120,
      price: 50,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNjg2MjM0NTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Digital Marketing Mastery",
      students: 85,
      price: 90,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW5nbGlzaHx8fHx8fDE2ODYyMzQ4MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Spoken English Fluency",
      students: 75,
      price: 140,
    },
    {
      image:
        "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjIzNTI4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Advance Ethical Hacking",
      students: 65,
      price: 75,
    },
    {
      image:
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWR1Y2F0aW9ufHx8fHx8MTY4NjIzNTQyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Communication Hacks Course",
      students: 60,
      price: 120,
    },
    {
      image:
        "https://images.hdqwalls.com/wallpapers/bthumb/python-logo-4k-i6.jpg",
      name: "Python Programming",
      students: 50,
      price: 250,
    },
  ]);

  return (
    <div>
      {/* For Cart Page Headings here  */}
      <div className='flex items-center justify-between container mx-auto p-4 uppercase'>
        <h1 className="text-xl font-bold">Total Order: {selectedClasses.length}</h1>
      </div>
      {/* For Cart Page Headings ends here */}

      {/* Tableuer Cart Content here */}
      <div className='container mx-auto p-4 text-sm font-medium'>
        {selectedClasses.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-[#49BBBD] h-14'>
              <tr className='text-white font-medium text-lg'>
                <th className='py-2 px-4 border-b'>No.</th>
                <th className='py-2 px-4 border-b'>Image</th>
                <th className='py-2 px-4 border-b'>Class</th>
                <th className='py-2 px-4 border-b'>Price</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((selectedClass, index) => (
                <tr
                  key={index}
                  className=''
                >
                  <td className='py-2 px-4 border-b'>{index + 1}</td>
                  <td className='py-2 px-4 border-b'>
                    <img
                      src={selectedClass?.image}
                      alt={selectedClass?.name}
                      className='w-16 h-16 object-cover'
                    />
                  </td>
                  <td className='py-2 px-4 border-b'>{selectedClass?.name}</td>
                  <td className='py-2 px-4 border-b'>
                    ${selectedClass?.price}
                  </td>
                  <td className='mt-5 flex items-center space-x-3'>
                    <button
                      className='text-[#49BBBD] hover:text-red-700'
                      //   onClick={() => removeFromCart(item._id)}
                    >
                      <FaTrash size={16}></FaTrash>
                    </button>
                    <button
                      className='bg-[#49BBBD] text-white py-2 px-4 rounded flex items-center space-x-2'
                      //   onClick={() => removeFromCart(item._id)}
                    >
                      <FaMoneyBill size={16}></FaMoneyBill> <span>Pay</span>
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

export default SelectedClasses;
