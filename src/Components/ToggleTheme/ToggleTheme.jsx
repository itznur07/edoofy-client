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
      className='text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300'
    >
      {t ? (
        <FaMoon onClick={lightTheme} size={18} />
      ) : (
        <FaSun onClick={darkTheme} className='animate-spin' />
      )}
    </button>
  );
}

export default ThemeToggle;
