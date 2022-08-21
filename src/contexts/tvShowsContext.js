// used for add to / remove favourites

import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [tvFavourites, setTvFavourites] = useState([]);
  

  const addToTvFavourites = (tv) => {
    if (!tvFavourites.includes(tv.id)) {
      let newTvFavourites = [...tvFavourites, tv.id];
      setTvFavourites(newTvFavourites);
    console.log("This is new " ,  newTvFavourites)
    }
  };

  
  // We will use this function in a later section
  const removeFromTvFavourites = (tv) => {
    setTvFavourites(tvFavourites.filter((id) => id !== tv.id));
   
  };

   
  return (
    <TvShowsContext.Provider
      value={{
        tvFavourites,
        addToTvFavourites,
        removeFromTvFavourites,
     
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
