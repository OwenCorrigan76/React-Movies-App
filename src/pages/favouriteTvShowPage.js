import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTvShowsPage = () => {
  const { favourites: tvShowIds } = useContext(TvShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteTvShowsQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });
  
  return (
    <PageTemplate
      title="Favourite Tv Shows"
      tvShows={tvShows}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavourites tv={tv} />
            <WriteReview tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;