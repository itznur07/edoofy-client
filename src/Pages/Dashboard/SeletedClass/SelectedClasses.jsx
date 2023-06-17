import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaMoneyBill, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthContext";

const SelectedClasses = () => {
  const [selectedClasses, setSelectedClass] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://server-omega-two.vercel.app/selectedclasses`)
      .then((response) => {
        // Handle successful response
        const data = response.data;
        const filteredData = data.filter(
          (cls) => cls?.selectorEmail === user?.email
        );
        setSelectedClass(filteredData);
      })
      .catch((error) => {});
  }, []);

  const removeFromCart = (_id) => {
    fetch(`https://server-omega-two.vercel.app/selectedclasses/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Classes Deleted!",
            text: "You classes deleted successfull!",
            confirmButtonText: "Awesome!",
            confirmButtonColor: "#49BBBD",
            iconColor: "text-green-500",
            customClass: {
              title: "text-green-500 text-3xl",
              text: "text-slate-500",
            },
          });
        }
      });
  };

  return (
    <div>
      {/* For Cart Page Headings here  */}
      <div className='flex items-center justify-between container mx-auto p-4 uppercase'>
        <h1 className='text-xl font-bold'>
          Total Courses: {selectedClasses?.length}
        </h1>
      </div>
      {/* For Cart Page Headings ends here */}

      {/* Tableuer Cart Content here */}
      <div className='container mx-auto p-4 text-sm font-medium'>
        {selectedClasses?.length === 0 ? (
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
              {selectedClasses?.map((selectedClass, index) => (
                <tr key={index} className='text-center'>
                  <td className='py-4 px-4 border-b'>{index + 1}</td>
                  <td className='py-4 px-4 flex justify-center border-b'>
                    <img
                      src={selectedClass?.classImage}
                      alt={selectedClass?.className}
                      className='w-16 h-16 object-cover'
                    />
                  </td>
                  <td className='py-4 px-4 border-b'>
                    {selectedClass?.className}
                  </td>
                  <td className='py-4 px-4 border-b'>
                    ${selectedClass?.price}
                  </td>
                  <td className='py-6 px-4 border-b '>
                    <div className='flex justify-center items-center space-x-3'>
                      <button
                        className='text-[#49BBBD] hover:text-red-700'
                        onClick={() => removeFromCart(selectedClass?._id)}
                      >
                        <FaTrash></FaTrash>
                      </button>
                      <button
                        className='bg-[#49BBBD] text-white py-2 px-4 rounded  flex items-center space-x-2'
                        //   onClick={() => removeFromCart(item._id)}
                      >
                        <FaMoneyBill></FaMoneyBill> <span>Pay</span>
                      </button>
                    </div>
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
