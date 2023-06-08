import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const loginImg =
    "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600&q=80";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <div className='flex max-w-7xl mx-auto justify-center h-screen items-center'>
      <div>
        <img className='rounded' src={loginImg} alt='person' />
      </div>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className='bg-white p-20 px-28 '
      >
        <h2 className='text-3xl text-center uppercase font-semibold text-gray-800 mb-10'>
          Login
        </h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
            type='password'
            name='password'
            id='password'
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
            })}
          />
          <br />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </div>
        {/*         
        <span className='text-sm mb-4 mt-2'>
          Forget password?{" "}
          <span className='text-blue-500 cursor-pointer'>reset</span>
        </span> */}
        {/* <br /> */}
        <button
          type='submit'
          className='bg-[#49BBBD] text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <div className='text-center mt-4 space-x-4 text-[#49BBBD]'>
          <button type='button' className='p-3 rounded-full bg-slate-100'>
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
          New here?{" "}
          <Link to='/signup'>
            <span className='text-[#49BBBD] font-medium'>Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
