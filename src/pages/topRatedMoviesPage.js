import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTopRatedMovies } from "../api/tmdb-api"; // new import from api page
// import MustWatchIcon from '../components/cardIcons/mustWatch'

const TopRatedMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "top_rated",
    getTopRatedMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        //  return <MustWatchIcon movie={movie} />
      }}
    />
  );
};

export default TopRatedMoviesPage;
