// used for add to / remove favourites

import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  

  const addToFavourites = (tv) => {
    if (!favourites.includes(tv.id)) {
      let newFavourites = [...favourites, tv.id];
      setFavourites(newFavourites);
    }
  };
  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter((tId) => tId !== tv.id));
  };

   
  return (
    <TvShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
     
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
