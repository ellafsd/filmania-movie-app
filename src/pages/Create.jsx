import React from "react";
import FormField from "../components/FormField";
import { inputs } from "../utils/constants";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data obj and convert to plain JS object
    // e is the event obj passed automatically to func when the form is submitted. e.target is the elem that triggered the event, which in this case is <form> (It refers to the form being submitted) So this means create a FormData obj from this form that was just submitted.
    // FormData is a built-in JS class that can collect all the input data inside a form It grabs all the <input> values (name + value pairs) from the form, like <input name="title" value="Inception" /> <input name="rating" value="9.2" />  and Resulting FormData contains {
    //   title: "Inception",
    //   rating: "9.2"
    // }
    // formData.entries() : gives all the name-value pairs from the form(.entries()	Returns [key, value] pairs of form inputs)
    // Object.fromEntries(formData.entries()) : turns those pairs into a JS obj

    const formData = new FormData(e.target);
    const movieData = Object.fromEntries(formData.entries());

    // Split comma-separated strings into arrays
    movieData.genre = movieData.genre.split(",");
    movieData.cast = movieData.cast.split(",");

    // Send to backend via POST request
    api
      .post("/api/movies", movieData)
      .then((res) => {
        toast.success("Movie was added");

        //Direct to detail page
        navigate(`/movie/${res.data.id}`);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        toast.error("Unsuccessful");
      });
  };
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center px-5 py-8">
      <div className="bg-white max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold">Create a new movie</h1>

          {/* Dynamically render fields from inputs array */}
          {inputs.map((props) => (
            <FormField {...props} />
          ))}

          {/* Submit button */}
          <button className="shadow border py-3 rounded-lg hover: shadow-lg hover:bg-gray-200 transition">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;
