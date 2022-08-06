<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
<<<<<<< HEAD
import Spinner from "../components/spinner";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);
=======
import Spinner from '../components/spinner'

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
<<<<<<< HEAD

=======
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

<<<<<<< HEAD
export default MovieDetailsPage;
=======
export default MovieDetailsPage;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
