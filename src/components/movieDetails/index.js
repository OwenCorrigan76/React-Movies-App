// this is the reviews button and drawer

import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import MovieReviews from "../movieReviews";
import { Link } from "react-router-dom";
import { getActor, getSimilarMovies } from "../../api/tmdb-api"; // import similar from api
// import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    background: "black",
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    //New
    position: "fixed",
    top: theme.spacing(55),
    right: theme.spacing(2),
  },
}));

const MovieDetails = ({ movie }) => {
  const classes = useStyles();
  const [similar, setSimilar] = useState([]);
  const [actor, setActor] = useState([]);

  const [drawerOpen, setDrawerOpen] = useState(false); // New
  useEffect(() => {
    getSimilarMovies(movie.id).then((movie) => {
      setSimilar(movie);
    });
  }, []);

  useEffect(() => {
    getActor(actor.id).then((actor) => {
      setActor(actor);
    });
  }, []);

  useEffect(() => {
    getSimilarMovies(similar.id).then((similar) => {
      console.log("This is similar", similar);
      setSimilar(similar);
    });
  }, []);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip
              label="Genres"
              className={classes.chipLabel}
              color="primary"
            />
          </li>
          {movie.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} className={classes.chip} />
            </li>
          ))}
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
          <Chip
            icon={<MonetizationIcon />}
            label={`${movie.revenue.toLocaleString()}`}
          />
          <Chip
            icon={<StarRate />}
            label={`${movie.vote_average} (${movie.vote_count}`}
          />
          <Chip label={`Released: ${movie.release_date}`} />
        </Paper>
      </div>
      {/* New */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <Link to={`/movies/${movie.id}/similar`}>Similar Movies</Link>
        <NavigationIcon />
        Click for Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
