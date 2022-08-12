import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const tvHomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tvShows={tvShows}
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />
);
};

export default tvHomePage;