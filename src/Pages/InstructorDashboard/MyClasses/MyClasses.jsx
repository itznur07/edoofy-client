import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthContext";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const MyClasses = () => {
  // const [classes, setClasses] = useState(users);
  const { user } = useContext(AuthContext);

  /** Get data using tanstack query */
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(`https://server-omega-two.vercel.app/classes`);

    return res.json();
  });

  const filteredClass = classes.filter(
    (cls) => cls.instructorEmail === user?.email
  );

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>
        <SectionTitle title='My Classes'></SectionTitle>
      </h2>
      <table className='min-w-full border border-gray-300 mt-5'>
        <thead>
          <tr className='bg-[#49BBBD] text-white font-bold text-lg'>
            <th className='py-4 px-4 border-b'>No</th>
            <th className='py-4 px-4 border-b'>Class Name</th>
            <th className='py-4 px-4 border-b'>Status</th>
            <th className='py-4 px-4 border-b'>Total Enrolled Students</th>
            <th className='py-4 px-4 border-b'>Feedback</th>
            <th className='py-4 px-4 border-b'>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredClass?.map((classItem, i) => (
            <tr key={classItem.id} className='text-center'>
              <td className='py-4 px-4 border-b'>{i + 1}</td>
              <td className='py-4 px-4 border-b'>{classItem.className}</td>
              <td className='border-b'>
                <button
                  className={` py-2 px-4 uppercase ${
                    classItem.status === "pending"
                      ? "text-[#f39292] text-md  rounded font-medium"
                      : classItem.status === "approved"
                      ? "text-green-500  font-medium rounded text-md"
                      : classItem.status === "denied"
                      ? "text-red-500  font-medium rounded text-md"
                      : ""
                  }`}
                >
                  {classItem.status}
                </button>
              </td>
              <td className='py-4 px-4 border-b'>
                {classItem.enrolledStudents}
              </td>
              <td className='py-4 px-4 border-b'>{classItem.feedback}</td>
              <td className='py-4 px-4 border-b'>
                <button className='text-[#49BBBD] hover:text-blue-700 flex justify-center items-center'>
                  <FaEdit /> <span>Update</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
