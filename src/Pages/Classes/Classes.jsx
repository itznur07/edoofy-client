import React, { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

function Classes() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      image: "https://source.unsplash.com/featured/?courses[6]",
      name: "Yoga for Beginners",
      instructorName: "Alice Smith",
      availableSeats: 10,
      price: 50,
    },
    {
      id: 2,
      image: "https://source.unsplash.com/featured/?courses[5]",
      name: "Guitar Lessons",
      instructorName: "Bob Jones",
      availableSeats: 0,
      price: 100,
    },
    {
      id: 3,
      image: "https://source.unsplash.com/featured/?courses[4]",
      name: "Photography Basics",
      instructorName: "Charlie Lee",
      availableSeats: 5,
      price: 80,
    },
    {
      id: 4,
      image: "https://source.unsplash.com/featured/?courses[3]",
      name: "Cooking Italian Cuisine",
      instructorName: "Diana Ross",
      availableSeats: 8,
      price: 60,
    },
    {
      id: 5,
      image: "https://source.unsplash.com/featured/?courses[2]",
      name: "Web Development with React",
      instructorName: "Evan Green",
      availableSeats: 3,
      price: 120,
    },
    {
      id: 6,
      image: "https://source.unsplash.com/featured/?courses[1]",
      name: "Spanish for Travelers",
      instructorName: "Fiona Garcia",
      availableSeats: 12,
      price: 40,
    },
  ]);
  const [user, setUser] = useState(true);
  useTitle("All Classes");

  // Check if the user is logged in
  const isLoggedIn = user !== null;

  // Check if the user is an admin or an instructor
  const isAdminOrInstructor =
    user && (user.role === "admin" || user.role === "instructor");

  // Handle the select button click
  const handleSelect = (classId) => {
    // Redirect the user to the class details page
    window.location.href = `/classes/${classId}`;
  };

  return (
    <div className='max-w-7xl mx-auto my-10 md:px-0 px-6'>
      <SectionTitle title='All Classes'></SectionTitle>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5'>
        {classes.map((c) => (
          <div
            key={c.id}
            className={`class-card p-3 rounded-lg  shadow-lg transform transition duration-500 hover:scale-105 ${
              c.availableSeats === 0 ? "bg-red-100" : "bg-white"
            }`}
          >
            <img
              src={c.image}
              alt={c.name}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <h2 className='text-2xl font-semibold mt-2'>{c.name}</h2>
            <p className='text-lg mt-1'>Instructor: {c.instructorName}</p>
            <p className='text-lg mt-1'>Available seats: {c.availableSeats}</p>
            <p className='text-lg mt-1'>Price: ${c.price}</p>
            <button
              className={`select-button w-full py-2 rounded-b-lg text-white font-bold mt-2 ${
                c.availableSeats === 0 || isAdminOrInstructor
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#49BBBD] hover:bg-blue-600"
              }`}
              onClick={() => handleSelect(c.id)}
              disabled={c.availableSeats === 0 || isAdminOrInstructor}
            >
              {isLoggedIn ? "Select" : "Log in to select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
