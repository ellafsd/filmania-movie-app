import React from "react";


// info → error obj returned by useQuery. It usually has properties like message, stack, etc.  refetch → is a funct that re-triggers the API call when the user clicks “Try Again”.
// React, when you use this <Error /> component and pass props to it, just give me info and refetch directly."
// So if you use it like this <Error info={error} refetch={refetch} />  in Main.jsx, info is the error obj (coming from useQuery), refetch is the function to retry the request
const Error = ({ info, refetch }) => {    //OBJECT DESTRUCTION
  
    // <h1>{info.message}</h1> Displays the error message from the info object(from the API)
    // Shows a button that calls refetch() when clicked.
    // So, if the API failed before, clicking Try Again will re-fetch the data.
    // refetch(): Re-runs the query to try fetching data again
  return (
    <div className="my-10 text-center bg-red-500 p-5 rounded-md max-w-[500px] mx-auto text-white">
      <h1>Problem Occurred..</h1>
      <h1>{info.message}</h1>     
      <button className="border rounded-md px-3 py-1 mt-5 hover:bg-white hover:text-black transition" onClick={refetch}>Try Again</button>
    </div>
  );
};

export default Error;
