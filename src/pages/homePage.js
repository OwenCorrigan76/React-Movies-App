import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery(
    'discover', 
    getMovies) // useQuery for caching

  if (isLoading) { // hopefully false
    return <Spinner />
  }

  if (isError) { // hopefully false 
    return <h1>{error.message}</h1>
  }  


  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};

export default HomePage;