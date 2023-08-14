import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <>
      <h2>single movie: {id}</h2>
    </>
  );
};

export default SingleMovie;
