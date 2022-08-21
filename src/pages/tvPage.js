import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTv } from "../api/tmdb-api"; // new import from api page
import { getTvImages } from '../api/tmdb-api';
// import MustWatchIcon from '../components/cardIcons/mustWatch'
import AddToTvFavouritesIcon from '../components/tvCardIcons/addToTvFavourites'

const NewTvPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "tvShows",
    getTv,
    getTvImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvShows = data.results;

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tvShows={tvShows}
      action={(tv) => {
        return <AddToTvFavouritesIcon tv={tv} />
      }}
    />
);
};

export default NewTvPage;
