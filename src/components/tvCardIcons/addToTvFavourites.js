//this is the heart, add to favourites icon

import React, { useContext } from "react";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
const AddToTvFavouritesIcon = ({ tv }) => {
  const context = useContext(TvShowsContext);

  const handleAddToTvFavourites = (e) => {
    e.preventDefault();
    context.addToTvFavourites(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTvFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavouritesIcon;
