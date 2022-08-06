import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getVideo } from "../api/tmdb-api"; // new import from api page
import MustWatchIcon from '../components/cardIcons/mustWatch'

const VideoPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "video",
    getVideo
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
      title="Straight To Video"
      movies={movies}
      action={(movie) => {
      return <MustWatchIcon movie={movie} />
      }}
    />
  );
};

export default VideoPage;
