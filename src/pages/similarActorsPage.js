// this page for similar movies
import React from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarMovies } from '../api/tmdb-api';
import { getMovie } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from 'react-router-dom';

const SimilarMoviesPage = () => {
  const {id } = useParams();
  const { data, error, isLoading, isError } = useQuery( // caching over the id
   ['similar',{id: id}],
    getSimilarMovies, 
    getMovie,
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movie = data.results;
console.log("THis is a ",  movie)

  return (
    <PageTemplate
      title='Similar Movies'
      movies={movie}
      action={(movie) => {
       return <AddToFavouritesIcon movie={movie} />;
      }}
    />
  );
};

export default SimilarMoviesPage;
