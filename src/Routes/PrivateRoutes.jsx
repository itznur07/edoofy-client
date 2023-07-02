import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";

const PrivateRoutes = ({ children }) => {
  
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='animate-spin h-12 w-12 text-indigo-500'>
          {/* You can use any SVG icon here */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </div>
      </div>
    );
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
