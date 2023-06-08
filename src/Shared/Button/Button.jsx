import React from "react";

const Button = ({ name, bgc }) => {
  return (
    <div>
      <button
        className={`py-2 px-4 font-medium text-white bg-[#${bgc}] rounded hover:bg-blue-400 transition duration-300`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
