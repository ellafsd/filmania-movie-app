import React from "react";
import { FaTrash } from "react-icons/fa";
import api from '../utils/api';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';


const DeleteButton = ({id}) => {

  const navigate = useNavigate();

    //Send API Request to Delete a Movie
  const handleDelete = () => {
    api.delete(`/api/movies/${id}`)
       .then( () =>{
        navigate("/")
        toast.warning("Movie deleted successfully");
       })
       .catch( (err) => {
         console.log(err)
         toast.error("Failed to delete the movie. Please try again.");
       });
  };

  return (
    <div>
      <button 
         onClick={handleDelete} 
         title="Delete"
         className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-700 flex items-center justify-center gap-2 text-sm"
         >
         
         <FaTrash />
         <span className="font-semibold text-sm">Delete</span>
      </button>
    </div>
  );
};

export default DeleteButton;
