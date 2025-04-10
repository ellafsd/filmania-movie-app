import React from "react";
import { useNavigate } from "react-router-dom";  // this lets you go to /movie/:id
import { useState } from "react";


const MovieSearch = ({ data }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const found = data.find((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      navigate(`/movie/${found.id}`);  // ← Go to detail page
    } else {
      alert("Movie not found!");
    }
  };

  return (
    <div className="px-10 py-5 lg:px-20 bg-[linear-gradient(#00000071,#00000071),url('cinema.png')] bg-cover bg-center text-white">
      <h1 className="text-4xl md:text-5xl">Welcome</h1>
      <h1 className="text-xl md:text-2xl font-semibold">
        Discover Movies
      </h1>

      <div className="rounded-lg overflow-hidden flex mt-5">

        <input
          type="text"
          placeholder="Search Movie"
          value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 text-black text-lg"
        />

        <button 
          onClick={handleSearch}
          className="bg-red-500 px-5 font-semibold hover:bg-red-700 ">
          Search
        </button>

      </div>
    </div>
  );
};
export default MovieSearch;