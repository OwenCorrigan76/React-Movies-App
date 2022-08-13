import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import { getTvShowDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TvDetailsPage = () => {
  const { id } = useParams();
  const {
    data: tv,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", {id: id }], 
  getTvShowDetails);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
