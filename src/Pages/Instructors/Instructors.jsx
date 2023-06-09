import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    image: "https://source.unsplash.com/featured/?developer[1]",
    numClassesTaken: 5,
    classesTaken: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 2,
    name: "Rohan row",
    email: "rowhan@example.com",
    image: "https://source.unsplash.com/featured/?developer[2]",
    numClassesTaken: 3,
    classesTaken: ["Reactjs", "Tailwindcss"],
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bobsmith@example.com",
    image: "https://source.unsplash.com/featured/?developer[3]",
    numClassesTaken: 2,
    classesTaken: ["Python"],
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    image: "https://source.unsplash.com/featured/?developer[4]",
    numClassesTaken: 1,
    classesTaken: ["Digital Marketing"],
  },
  {
    id: 5,
    name: "Tom Hanks",
    email: "tomhanks@example.com",
    image: "https://source.unsplash.com/featured/?developer[5]",
    numClassesTaken: 2,
    classesTaken: ["Hacking", "Cyber Security"],
  },
  {
    id: 6,
    name: "hamid khan",
    email: "hamidkhan@example.com",
    image: "https://source.unsplash.com/featured/?developer[6]",
    numClassesTaken: 2,
    classesTaken: ["Expressjs", "Mongodb"],
  },
];

const InstructorsPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <SectionTitle title='Instructors'></SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-10 md:mx-0 mx-3'>
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className='bg-white rounded-lg border-t border-s border-[#49BBBD] shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer p-4 flex flex-col items-center'
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className='w-32 h-32 rounded-full mb-4 object-cover'
            />
            <h2 className='text-lg font-bold mb-2'>{instructor.name}</h2>
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
              href={`/instructors/${instructor.id}/classes`}
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
