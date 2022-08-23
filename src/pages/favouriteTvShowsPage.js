import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTvShowDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromTvFavourites from "../components/tvCardIcons/removeFromTvFavourites";
import WriteReviewTv from "../components/tvCardIcons/writeTvReview";

const FavouriteTvShowsPage = () => {
  const { tvFavourites: tvIds } = useContext(TvShowsContext);
  console.log("tvIds is ", tvIds);

  const favouriteTvShowsQueries = useQueries(
    tvIds.map(function (tvId) {
      console.log("tvId is ", tvId);

      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTvShowDetails,
      };
    })
  );
  console.log(favouriteTvShowsQueries);
  const isLoading = favouriteTvShowsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvShowsQueries.map((t) => {
    t.data.type = "TV";
    t.data.title = t.data.name;
    t.data.release_date = t.data.first_air_date;
    return t.data;
  });

  return (
    <PageTemplate
      title="Favourite Tv Shows"
      tvShows={tvShows}
      action={(tv) => {
        return (
          <>
            <RemoveFromTvFavourites tv={tv} />
            <WriteReviewTv tv={tv} />{" "}
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;
