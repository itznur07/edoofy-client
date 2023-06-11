import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthContext";

function ThemeToggle() {
  const [t, st] = useState(false);

  const { setTheme } = useContext(AuthContext);

  const lightTheme = () => {
    st(!t);
    setTheme("white");
  };

  const darkTheme = () => {
    st(!t);
    setTheme("black");
  };

  return (
    <button
      type='button'
      className='text-[#49BBBD]  dark:text-[#49BBBD]  hover:text-[#49BBBD] dark:hover:text-blue-400 transition duration-300'
    >
      {t ? (
        <FaMoon onClick={lightTheme} size={18} />
      ) : (
        <FaSun onClick={darkTheme} size={24} className='animate-spin' />
      )}
    </button>
  );
}

export default ThemeToggle;
