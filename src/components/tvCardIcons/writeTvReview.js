//this is the write review icon


import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteTvReviewIcon = ({ tv }) => {
  return (
    <Link
      to={"/reviewsTv/form"}
      state={{
        tvId: tv.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTvReviewIcon;
