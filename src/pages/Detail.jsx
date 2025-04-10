import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import DeleteButton from "../components/DeleteButton";
import ListField from "../components/ListField";
import Field from "../components/Field";

import { Link } from "react-router-dom";




const Detail = () => {
  // 🟡 FILMIN DETAYI ICIN ID YE IHTIYACIM VAR, ID FILMIN URL'ININ  BIR PARCASI. BU DURUMDA URL'E ERISMEK ICIN useParams IMPORT EDIP KULLANIRIM
  // If I need detail of sth, I need its id. So I get id from React router dom using obj destruction. Imported useParams to get id from the URL (e.g., /movie/3 → id = 3)
  const { id } = useParams();

  // 🟢 useQuery runs the API call and manages loading, error, and data
  const { isLoading, error, data, refetch } = useQuery({
    // queryKey is a unique name for caching and refetching — it should be an array
    queryKey: ["movie", id],

    // queryFn is the funct that makes the actual API request
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  // 🔄 If the data is still loading, show Loader component
  if (isLoading) return <Loader />;

  // 🔴 If there’s an error fetching data, show Error component.
  if (error) return <Error info={error} refetch={refetch} />;

  return (
    
    <div className="p-10">
    {/* Top controls: Back & Delete */}
    <div className="flex justify-between items-center mb-4">
      <Link to="/" className="text-2xl text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <DeleteButton id={data.id} />
    </div>

      <div className="flex flex-col gap-10 item-center md:flex-row">
        <div>
          <img
            className="rounded-md"
            src={`https://picsum.photos/seed/${data.id}/200/300`}
            alt="post"
          />
        </div>

        <div className="flex flex-col gap-10">
          {/* Title Area */}
          <div>
            <h1 className="text-4xl font-semibold mb-3">{data.title}</h1>
            <p className="text-2xl"> {data.description}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 ">
            <Field
              label="⭐ Audience Rating"
              value={Number(data.rating).toFixed(1)}
            />
            <Field label="Duration" value={data.duration} />
            <Field label="Language" value={data.language} />
            <Field label="Year" value={data.year} />
            <Field label="Director" value={data.director} />
          </div>

          {/* Cast & Genre */}
             <ListField label="Cast" arr={data.cast} />
             <ListField label="Genre" arr={data.genre} />

        </div>
      </div>
    </div>
  );
};

export default Detail;
