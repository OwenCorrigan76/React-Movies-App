<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { useContext  } from "react";
import Avatar from "@material-ui/core/Avatar" // new import
import { Link } from "react-router-dom";  // new import to make 'more info' button dynamic
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
<<<<<<< HEAD
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
=======
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({  // hook function
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
<<<<<<< HEAD
  const { favourites } = useContext(MoviesContext);
=======
  const { favourites} = useContext(MoviesContext);
  const { mustWatch } = useContext(MoviesContext);

>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
<<<<<<< HEAD
    movie.favourite = false;
  }

 

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          movie.favourite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />{" "}
=======
    movie.favourite = false
  }

  
  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatchMovie = true;
  } else {
    movie.mustWatchMovie = false
  }

const handleAddToFavourite = (e) => {
    e.preventDefault();
    // addToFavourites(movie);
  };

  return (
    <Card className={classes.card}>
     <CardHeader
      className={classes.header}
      avatar={
        movie.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
