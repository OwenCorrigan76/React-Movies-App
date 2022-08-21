// used for add to / remove favourites

import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [favourites, setTvFavourites] = useState([]);
  

  const addToTvFavourites = (tv) => {
    if (!favourites.includes(tv.id)) {
      let newFavourites = [...favourites, tv.id];
      setTvFavourites(newFavourites);
    }
  };
  // We will use this function in a later section
  const removeFromTvFavourites = (tv) => {
    setTvFavourites(favourites.filter((tId) => tId !== tv.id));
  };

   
  return (
    <TvShowsContext.Provider
      value={{
        favourites,
        addToTvFavourites,
        removeFromTvFavourites,
     
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
