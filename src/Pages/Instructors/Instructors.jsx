import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const instructors = [
  {
    id: 1,
    name: "Faria Khan",
    email: "fariakhan@example.com",
    image:
      "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMTMxNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 5,
    classesTaken: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 2,
    name: "Rohan row",
    email: "rowhan@example.com",
    image:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMDg5MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 3,
    classesTaken: ["Reactjs", "Tailwindcss"],
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bobsmith@example.com",
    image:
      "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMDk0NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 2,
    classesTaken: ["Python"],
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    image:
      "https://images.unsplash.com/photo-1498814217031-5a856f4a18ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMDk1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 1,
    classesTaken: ["Digital Marketing"],
  },
  {
    id: 5,
    name: "Tom Hanks",
    email: "tomhanks@example.com",
    image:
      "https://images.unsplash.com/photo-1607970420862-385a245239a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMTIzOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 2,
    classesTaken: ["Hacking", "Cyber Security"],
  },
  {
    id: 6,
    name: "hamid khan",
    email: "hamidkhan@example.com",
    image:
      "https://images.unsplash.com/photo-1605379399582-21f603abaed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGV2ZWxvcGVyfHx8fHx8MTY4NjMxMTMzOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    numClassesTaken: 2,
    classesTaken: ["Expressjs", "Mongodb"],
  },
];

const InstructorsPage = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <SectionTitle title='Instructors'></SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:mx-0 mx-3 mt-16'>
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
