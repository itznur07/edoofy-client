import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const ManageClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(`http://localhost:3000/classes`);
    return res.json();
  });

  const openFeedbackModal = (classId) => {
    setSelectedClass(classId);
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setSelectedClass(null);
    setFeedbackModalOpen(false);
    setFeedback("");
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    // Perform API request or database update to send feedback to the instructor
    // Update the class status in the classes state or refetch the updated class list
    // Close the feedback modal
    closeFeedbackModal();
  };

  const approveClass = (classId) => {
    // Perform API request or database update to approve the class
    // Update the class status in the classes state or refetch the updated class list
  };

  const denyClass = (classId) => {
    // Perform API request or database update to deny the class
    // Update the class status in the classes state or refetch the updated class list
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>
        <SectionTitle title='Manage Classes'></SectionTitle>
      </h2>
      <table className='min-w-full border border-gray-300 mt-5'>
        <thead>
          <tr className='bg-[#49BBBD] text-white'>
            <th className='py-4 px-4 border-b'>Class Image</th>
            <th className='py-4 px-4 border-b'>Class Name</th>
            <th className='py-4 px-4 border-b'>Instructor Name</th>
            <th className='py-4 px-4 border-b'>Instructor Email</th>
            <th className='py-4 px-4 border-b'>Available Seats</th>
            <th className='py-4 px-4 border-b'>Price</th>
            <th className='py-4 px-4 border-b'>Status</th>
            <th className='py-4 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes?.map((classItem) => (
            <tr key={classItem.id} className='text-center'>
              <td className='py-2 px-4 border-b'>
                <img
                  src={classItem.classImage}
                  alt={classItem.className}
                  className='w-14 h-14 object-cover'
                />
              </td>
              <td className='py-2 px-4 border-b'>{classItem.className}</td>
              <td className='py-2 px-4 border-b'>{classItem.instructorName}</td>
              <td className='py-2 px-4 border-b'>
                {classItem.instructorEmail}
              </td>
              <td className='py-2 px-4 border-b'>{classItem.availableSeats}</td>
              <td className='py-2 px-4 border-b'>${classItem.price}</td>
              <td className='border-b'>
                <button className='py-2 uppercase font-bold px-4 text-[#f39292] text-mdfont-medium'>
                  {classItem.status}
                </button>
              </td>
              <td className='py-2 px-4 border-b'>
                {classItem.status === "pending" && (
                  <div className='space-x-2 flex items-center'>
                    <button
                      className='bg-green-500 hover:bg-green-700 text-white py-2 px-2 rounded'
                      onClick={() => approveClass(classItem.id)}
                      disabled={classItem.status !== "pending"}
                    >
                      Approve
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded'
                      onClick={() => denyClass(classItem.id)}
                      disabled={classItem.status !== "pending"}
                    >
                      Deny
                    </button>
                    <button
                      className='bg-[#49BBBD] hover:bg-[#185657] text-white py-2 px-2 rounded'
                      onClick={() => openFeedbackModal(classItem.id)}
                      disabled={classItem.status !== "pending"}
                    >
                     Feedback
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {feedbackModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75'>
          <div className='bg-white p-4 rounded shadow'>
            <h3 className='text-lg font-bold mb-2'>Send Feedback</h3>
            <textarea
              className='w-full h-32 border border-gray-300 p-2 mb-2'
              placeholder='Write your feedback here...'
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            <div className='flex justify-end'>
              <button
                className='bg-blue-500 text-white py-1 px-2 rounded'
                onClick={submitFeedback}
              >
                Send
              </button>
              <button
                className='bg-gray-500 text-white py-1 px-2 rounded ml-2'
                onClick={closeFeedbackModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
