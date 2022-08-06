import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";

<<<<<<< HEAD
const MovieList = ({ movies, action }) => {
=======
const MovieList = ( {movies, action }) => {
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

<<<<<<< HEAD
export default MovieList;
=======
export default MovieList;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
