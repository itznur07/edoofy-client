import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);

  const loginImg =
    "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600&q=80";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Password validation function
  const validatePassword = (password) => {
    // Check if password is at least 6 characters long
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    // Check if password has a capital letter
    if (!/[A-Z]/.test(password)) {
      return "Password must have a capital letter";
    }
    // Check if password has a special character
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must have a special character";
    }
    // If all checks pass, return true
    return true;
  };

  // Confirm password validation function
  const validateConfirmPassword = (confirmPassword) => {
    // Get the value of the password field
    const password = document.getElementById("password").value;
    // Check if confirm password matches password
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    // If check passes, return true
    return true;
  };

  const handleSignUp = ({ email, password, name, photo }) => {
    const userInfo = {
      email,
      password,
      name,
      photo,
    };
    console.log(userInfo);
  };

  return (
    <div className='flex  max-w-7xl mx-auto justify-center pb-3 items-center'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='bg-white py-10 px-28 '
      >
        <h2 className='text-3xl text-center font-semibold text-gray-800 mb-8'>
          Create an account
        </h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            type='name'
            name='name'
            id='name'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#49BBBD]  focus:border-transparent ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
            })}
          />
          <br />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#49BBBD]  focus:border-transparent ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <br />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type={`${show === true ? "text" : "password"}`}
            name='password'
            id='password'
            className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#49BBBD]  focus:border-transparent ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: true,
              validate: validatePassword,
            })}
          />
          <span
            onClick={() => setShow(!show)}
            className='absolute mt-3 mx-3 cursor-pointer text-[#49BBBD]'
          >
            <FaEye size={18}></FaEye>
          </span>
          <br />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </div>
        <div className='mb-2'>
          <label
            htmlFor='confirmPassword'
            className='block text-gray-700 font-bold mb-2'
          >
            Confirm Password
          </label>
          <input
            type={`${show === true ? "text" : "password"}`}
            name='confirmPassword'
            id='confirmPassword'
            className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#49BBBD]  focus:border-transparent ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("confirmPassword", {
              required: true,
              validate: validateConfirmPassword,
            })}
          />
          <br />
          {errors.confirmPassword && (
            <span className='text-red-500'>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='photo' className='block text-gray-700 font-bold mb-2'>
            PhotoURL
          </label>
          <input
            type='text'
            name='photo'
            id='photo'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#49BBBD]  focus:border-transparent ${
              errors.photo ? "border-red-500" : ""
            }`}
            {...register("photo", {
              required: "PhotoURL is required",
            })}
          />
          <br />
          {errors.photo && (
            <span className='text-red-500'>{errors.photo.message}</span>
          )}
        </div>
        <button
          type='submit'
          className='bg-[#49BBBD]  text-white w-full font-bold py-2 mt-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Signup
        </button>
        <div className='text-center mt-3 space-x-4 text-[#49BBBD]'>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaFacebook />
          </button>
          <button
            type='button'
            // onClick={handleGoogleSignIn}
            className='p-3 rounded-full bg-slate-100'
          >
            <FaGoogle />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          already signup?{" "}
          <Link to='/login'>
            <span className='text-[#49BBBD] font-medium'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
