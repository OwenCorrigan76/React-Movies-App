// this is the must watch icon

import React, { useContext } from "react";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchTv = ({ tv }) => {
  const context = useContext(TvShowsContext);

  const handleAddToMustWatchTv = (e) => {
    e.preventDefault();
    context.addToMustWatch(tv);
    console.log(tv);
  };

  return (
    <IconButton aria-label="add to favourotes" onClick={handleAddToMustWatchTv}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchTv;
