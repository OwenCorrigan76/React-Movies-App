import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api"; // new import from api page

const UpcomingMoviesPage = (props) => {
  const [movies, setUpcomingMovies] = useState([]);
  const upcoming = movies.filter(m => m.upcoming)
  localStorage.setItem('upcoming', JSON.stringify(upcoming))

  const addToUpcoming = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, upcoming: true } : m
    );
    setUpcomingMovies(updatedMovies);
  };

  useEffect(() => {  // refactored to this in lab 3
    getUpcomingMovies().then(movies => {
      setUpcomingMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectUpcoming={addToUpcoming}
    />
  );
};
export default UpcomingMoviesPage;