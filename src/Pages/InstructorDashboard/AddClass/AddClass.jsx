import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthContext";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const AddClassForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = ({
    className,
    classImage,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
  }) => {
    const classInfo = {
      className,
      classImage,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status: "pending",
      enrolledStudents: 0,
      feedback: "",
    };

    /** Post class data in class collections */
    fetch(`https://server-omega-two.vercel.app/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!🎊",
            text: "Class added successfull!",
            confirmButtonText: "Awesome!",
            confirmButtonColor: "#49BBBD",
            iconColor: "text-green-500",
            customClass: {
              title: "text-green-500 text-3xl",
              text: "text-slate-500",
            },
          });
          reset();
        }
      });
  };

  return (
    <div className='mt-28'>
      <SectionTitle title='Add Class'></SectionTitle>
      <div className='max-w-3xl mx-auto mt-10 rounded  flex justify-center bg-white border-[#49BBBD] border-e  border-b p-6 shadow-lg '>
        <form onSubmit={handleSubmit(onSubmit)} className='gap-5'>
          <div className='grid grid-cols-2 gap-5'>
            <div className='mb-4'>
              <label
                htmlFor='className'
                className='block text-gray-700 font-bold mb-2'
              >
                Class Name
              </label>
              <input
                type='text'
                id='className'
                {...register("className", { required: true })}
                className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                  errors.className ? "border-red-500" : ""
                }`}
              />
              {errors.className && (
                <p className='text-red-500 text-sm mt-1'>
                  Class Name is required
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='classImage'
                className='block text-gray-700 font-bold mb-2'
              >
                Class Image
              </label>
              <input
                type='text'
                id='classImage'
                {...register("classImage", { required: true })}
                className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                  errors.classImage ? "border-red-500" : ""
                }`}
              />
              {errors.classImage && (
                <p className='text-red-500 text-sm mt-1'>
                  Class Image is required
                </p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className='mb-4'>
              <label
                htmlFor='instructorName'
                className='block text-gray-700 font-bold mb-2'
              >
                Instructor Name
              </label>
              <input
                type='text'
                id='instructorName'
                readOnly
                defaultValue={user?.displayName}
                {...register("instructorName", { required: true })}
                className='relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='instructorEmail'
                className='block text-gray-700 font-bold mb-2'
              >
                Instructor Email
              </label>
              <input
                type='text'
                id='instructorEmail'
                readOnly
                {...register("instructorEmail", { required: true })}
                defaultValue={user?.email}
                className='relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className='mb-4'>
              <label
                htmlFor='availableSeats'
                className='block text-gray-700 font-bold mb-2'
              >
                Available Seats
              </label>
              <input
                type='number'
                id='availableSeats'
                {...register("availableSeats", { required: true })}
                className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                  errors.availableSeats ? "border-red-500" : ""
                }`}
              />
              {errors.availableSeats && (
                <p className='text-red-500 text-sm mt-1'>
                  Available Seats is required
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='price'
                className='block text-gray-700 font-bold mb-2'
              >
                Price
              </label>
              <input
                type='number'
                id='price'
                {...register("price", { required: true })}
                className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#49BBBD] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                  errors.price ? "border-red-500" : ""
                }`}
              />
              {errors.price && (
                <p className='text-red-500 text-sm mt-1'>Price is required</p>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='bg-[#49BBBD] text-white w-full font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClassForm;
