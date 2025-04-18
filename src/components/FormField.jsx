import React from "react";


// placeholder = {placeholder || " "}  if no custom placeholder, show a space for floating label
const FormField = ({ name, label, type = "text", min, max, placeholder, step }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder || " "}  // if no custom placeholder, show a space for floating label
        required
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />

      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 
          peer-focus:px-2 peer-focus:text-blue-600 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:-translate-y-1/2 
          peer-placeholder-shown:top-1/2 
          peer-focus:top-2 peer-focus:scale-75 
          peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

export default FormField;
