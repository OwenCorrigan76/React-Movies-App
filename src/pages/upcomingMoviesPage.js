import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from "../api/tmdb-api"; // new import from api page
import MustWatchIcon from '../components/cardIcons/mustWatch'


<<<<<<< HEAD
=======
// const addToFavourites = () => null;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
<<<<<<< HEAD
 
  return (
    <PageTemplate
      title="Upcoming Movies"
=======
  
  const upcoming = movies.filter(m => m.upcoming)
  localStorage.setItem('upcoming', JSON.stringify(upcoming))
  const addToUpcoming = (movieId) => true 
  

 
  return (
    <PageTemplate
      title="Discover Movies"
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
      movies={movies}
      action={(movie) => {
      return <MustWatchIcon movie={movie} />
      }}
    />
);
};

export default UpcomingMoviesPage;