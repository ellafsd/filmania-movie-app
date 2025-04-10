import React from "react";


const Field = ({ label, value }) => {
  return (
    <p>
      <span className="font-semibold me-2"> {label} </span>
      <span className= {"p-2 px-4 rounded-full font-semibold bg-gray-100"}>
        {value}
      </span>
    </p>
  );
};

export default Field;