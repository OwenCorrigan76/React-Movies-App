// this is the heart, remove from favourites icon

import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTvFavouritesIcon = ({ tv }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromTvFavourites = (e) => {
    e.preventDefault();
    context.removeFromTvFavourites(tv);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromTvFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavouritesIcon;
