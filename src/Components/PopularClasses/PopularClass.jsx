import axios from "axios";
import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";

const PopularClass = () => {
  const [classes, setClasses] = useState();

  /** Data Fecting using axios */
  axios
    .get(`https://server-omega-two.vercel.app/classes`)
    .then((response) => {
      // Handle successful response
      const data = response.data;
      const filteredData = data.filter((cls) => cls?.status === "approved");
      setClasses(filteredData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      {" "}
      <div className='md:max-w-7xl mx-auto mt-5'>
        <SectionTitle title='Popular Classes'></SectionTitle>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 my-10 mt-10'>
          {classes?.slice(0, 6).map((cls) => (
            <ClassCard cls={cls} key={cls?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
