import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
=======

const useStyles = makeStyles((theme) => ({  // hook function
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const MovieHeader = (props) => {
<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  const classes = useStyles();
  const movie = props.movie;

  return (
    <Paper component="div" className={classes.root}>
<<<<<<< HEAD
     <IconButton aria-label="go back"  onClick={() => navigate(-1)}>
=======
      <IconButton aria-label="go back">
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span className={classes.tagLine}>{`   "${movie.tagline}"`} </span>
      </Typography>
<<<<<<< HEAD
      <IconButton aria-label="go forward"  onClick={() => navigate(1)}>
=======
      <IconButton aria-label="go forward">
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;