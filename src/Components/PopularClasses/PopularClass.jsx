import { useState } from "react";
import ClassCard from "./ClassCard";

const PopularClass = () => {
  const [classes, setClasses] = useState([
    {
      image: "https://source.unsplash.com/random/300x200?yoga",
      name: "Yoga for Beginners",
      students: 120,
    },
    {
      image: "https://source.unsplash.com/random/300x200?guitar",
      name: "Guitar Lessons",
      students: 85,
    },
    {
      image: "https://source.unsplash.com/random/300x200?cooking",
      name: "Cooking with Chef John",
      students: 75,
    },
    {
      image: "https://source.unsplash.com/random/300x200?painting",
      name: "Painting with Bob Ross",
      students: 65,
    },
    {
      image: "https://source.unsplash.com/random/300x200?coding",
      name: "Coding with React",
      students: 60,
    },
    {
      image: "https://source.unsplash.com/random/300x200?dancing",
      name: "Dancing with the Stars",
      students: 50,
    },
  ]);

  return (
    <div>
      {" "}
      <div className='md:max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-4'>Popular Classes</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 my-5'>
          {classes.map((cls) => (
            <ClassCard cls={cls} key={cls?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
