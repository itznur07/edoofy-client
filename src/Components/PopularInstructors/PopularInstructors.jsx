import axios from "axios";
import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorsCard";

const PopularInstructors = () => {
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
    <div className='max-w-7xl mx-auto mt-20 mb-5 '>
      <SectionTitle title='Popular Instructors'></SectionTitle>
      <div className='grid md:grid-cols-3 gap-5 my-10'>
        {instructors?.slice(0, 6).map((instructor) => (
          <InstructorCard key={instructor?.name} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
