import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTv, getTvShowDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromTvFavourites from "../components/tvCardIcons/removeFromTvFavourites";
import AddToTvFavourites from "../components/tvCardIcons/addToTvFavourites";

// import WriteReviewTv from "../components/cardIcons/writeReviewTv";

const FavouriteTvShowsPage = () => {
  const { tvFavourites: tvIds } = useContext(TvShowsContext);
  console.log ("tvIds is " ,tvIds);


  // Create an array of queries and run in parallel.
  const favouriteTvShowsQueries = useQueries(
    tvIds.map(function (tvId)  {
      console.log ("tvId is " ,tvId);

      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTvShowDetails,
      };
    })
  );
  console.log (favouriteTvShowsQueries);
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvShowsQueries.map((t) => {
    t.data.type = "TV";
    t.data.title = t.data.name;
    t.data.release_date = t.data.first_air_date;
  return t.data;
  })

  return (
    <PageTemplate
     title="Favourite Tv Shows"
      tvShows={tvShows}
      action={(tv) => {
        return (
          <>
            <RemoveFromTvFavourites tv={tv} />
            {/*             <WriteReviewTV tv={tv} />
             */}{" "}
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;
