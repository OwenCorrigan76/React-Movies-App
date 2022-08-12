import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: 'white',
    color: 'black',
  },
  media: { height: 500 },
});
export default function TvCard({ tv, action }) {
  const classes = useStyles();
  const { favourites } = useContext(TvContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }


  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}  title={
          <Typography variant='h5' component='p'>
            {tv.name}{' '}
          </Typography>
        }
        style={{ height: 70 }}
      />
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
            <Typography variant='h6' component='p'>
              <StarRate fontSize='medium' />
              {' Popularity '} {tv.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/tvShows/${tv.id}`}>
          <Button variant='contained' size='medium' color='primary'>
            TV Show Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
