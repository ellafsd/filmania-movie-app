import React, { useState, useEffect} from "react";
import api from "../utils/api";
import {useQuery} from "@tanstack/react-query";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";
import MovieSearch from "../components/MovieSearch";


const Main = () => {

// This is object destructuring. Using useQuery to fetch data from the server. When you call useQuery(...), it returns an obj with many useful properties, like data, errorUpdateCount, isLoading.
// HERE WE SAY: just give me the data, errorUpdateCount, and isLoading values from that returned object — I don’t need the rest right now.
// data: actual result returned by queryFn. If API call fails (server is down, wrong URL, no internet, etc.) error will contain the error object, isLoading: This is true while your data is being fetched. Once the data is loaded (or it fails), it becomes false. Great for showing a loading spinner or message while waiting for your movies to load,  refetch: if error shows up in the screen, re-render it. 
// queryKey: feature of useQuery. It uniquely identifies the query. It must be an array. queryFn: required feature of useQuery. It takes a function that returns a promise (usually a fetch or axios call).  
const {data, error, isLoading, refetch} = useQuery({
  queryKey: ["movies"],
  queryFn: () => 
    api.get("/api/movies")   // Makes GET request to end point (/api/movies)
     .then((res)=> res.data),   //gets the `data` property from the response object becaues we need data from response so we get it. Axios wraps the response in an object: { data, status, headers, config... } So `res.data` gives us the actual array/object returned from the backend
});

// each movie is an array. map fucn in JS return every array 
// Card is a React component that is created and used to display each movie's info
// <Card movie={movie}/> :sending data into the Card component using a prop called movie
// key={movie.id} : In React, when you use .map() to loop over a list of elements/components, you must give each one a unique key. It helps React know which item changed when re-rendering, for performance.
return (
  <div>
    <MovieSearch data={data || []}  />
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Error info={error} refetch={refetch} />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:px-10">
            {data.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    )}
  </div>
);

};
// Exporting the component to be used in other files
export default Main;
