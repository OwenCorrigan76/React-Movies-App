// used for add to / removez favourites

import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top_rated, setTopRated] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addToUpcoming = (movie) => {
    if (!upcoming.includes(movie.id)) {
      let newUpcoming = [...upcoming, movie.id];
      setUpcoming(newUpcoming);
    }
  };
  const addToTopRated = (movie) => {
    if (!top_rated.includes(movie.id)) {
      let newTopRated = [...top_rated, movie.id];
      setTopRated(newTopRated);
    }
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        upcoming,
        addToUpcoming,
        top_rated,
        addToTopRated,
        addReview,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
