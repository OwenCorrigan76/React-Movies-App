import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "white",
    color: "black",
  },
  media: { height: 500 },
});

export default function TvCard({ tv, action }) {
  const classes = useStyles();
  const { tvFavourites } = useContext(TvShowsContext);

  if (tvFavourites.find((id) => id === tv.id)) {
    tv.favourite = true;
  } else {
    tv.favourite = false;
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          tv.favourite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
      />{" "}
      <CardMedia
        className={classes.media}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {" Popularity "} {tv.popularity}
            </Typography>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {tv.vote_average}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tv)}
        <Link to={`/tvShows/${tv.id}`}>
          <Button variant="contained" size="medium" color="primary">
            TV Show Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
