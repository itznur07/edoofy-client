import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorsCard";

const PopularInstructors = () => {
  const [instructors] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NjI0MDE4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "John Doe",
      classes: 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NjI0MDA5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Jane Smith",
      classes: 10,
    },
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NjI0MDExOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Bob Ross",
      classes: 9,
    },
    {
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NjI0MDU0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Sam Joy",
      classes: 8,
    },
    {
      image:
        "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVhY2hlcnx8fHx8fDE2ODYyNDA0MTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Taylor Swift",
      classes: 7,
    },
    {
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NjI0MDQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Elon Musk",
      classes: 6,
    },
  ]);

  return (
    <div className='max-w-7xl mx-auto mt-20 mb-5 '>
      <SectionTitle title='Popular Instructors'></SectionTitle>
      <div className='grid md:grid-cols-3 gap-5 my-10'>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor?.name} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
