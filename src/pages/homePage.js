import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
<<<<<<< HEAD
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
=======
  const {  data, error, isLoading, isError }  = useQuery('discovery', getMovies)
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

<<<<<<< HEAD
=======
  // These three lines are redundant; we will replace them later on.
  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
<<<<<<< HEAD
        return <AddToFavouritesIcon movie={movie} />
=======
      return <AddToFavouritesIcon movie={movie} />
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
      }}
    />
);
};

export default HomePage;