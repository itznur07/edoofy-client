import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthContext";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

function Classes() {
  const [classes, setClasses] = useState();

  const { user } = useContext(AuthContext);

  useTitle("All Classes");

  /** Axios for fatching classes data */
  useEffect(() => {
    axios
      .get(`https://server-omega-two.vercel.app/classes`)
      .then((response) => {
        // Handle successful response
        const data = response.data;
        const filteredData = data.filter((cls) => cls?.status === "approved");
        setClasses(filteredData);
      })
      .catch((error) => {});
  }, []);

  // Handle the select button click
  const handleSelect = ({
    className,
    classImage,
    price,
    instructorName,
    instructorEmail,
    availableSeats,
    status,
    enrolledStudents,
  }) => {
    const classData = {
      className,
      classImage,
      price,
      instructorEmail,
      instructorName,
      availableSeats,
      status,
      enrolledStudents,
      selectorEmail: user?.email,
    };

    fetch(`https://server-omega-two.vercel.app/selectedclasses`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Class selected succesfully!");
        }
      });
  };

  return (
    <div className='max-w-7xl mx-auto my-10 md:px-0 px-6 mt-10'>
      <SectionTitle title='All Classes'></SectionTitle>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-10'>
        {classes?.map((c) => (
          <div
            key={c._id}
            className={`class-card p-3 rounded-lg  shadow-lg transform transition duration-500 hover:scale-105 ${
              c.availableSeats === "0" ? "bg-red-200" : "bg-white"
            }`}
          >
            <img
              src={c.classImage}
              alt={c.className}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <h2 className='text-2xl font-semibold mt-2'>{c.className}</h2>
            <p className='text-lg mt-1'>Instructor: {c.instructorName}</p>
            <p className='text-lg mt-1'>Available seats: {c.availableSeats}</p>
            <p className='text-lg mt-1'>Price: ${c.price}</p>
            <button
              className={`select-button w-full py-2 rounded-b-lg text-white font-bold mt-2 ${
                c.availableSeats === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#49BBBD] hover:bg-blue-600"
              }`}
              onClick={() => handleSelect(c)}
              disabled={c.availableSeats === 0}
            >
              {user?.email ? "Select" : "Log in to select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
