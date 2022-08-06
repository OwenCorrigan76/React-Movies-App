import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
<<<<<<< HEAD
import Spinner from "../spinner";
=======
import Spinner from '../spinner'
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
<<<<<<< HEAD
    height: "100vh",
=======
    height: '100vh',
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  },
}));

const TemplateMoviePage = ({ movie, children }) => {
  const classes = useStyles();
<<<<<<< HEAD
  const { data, error, isLoading, isError } = useQuery(
=======
  const { data , error, isLoading, isError } = useQuery(
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    ["images", { id: movie.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
<<<<<<< HEAD
  const images = data.posters;

  return (
    <>
      <div className={classes.root}>
        <MovieHeader movie={movie} />
        <Grid container spacing={5} style={{ padding: "15px" }}>
          <Grid item xs={3}>
            <div className={classes.imageListRoot}>
              <ImageList rowHeight={500} className={classes.gridList} cols={1}>
                {images.map((image) => (
                  <ImageListItem key={image.file_path} cols={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={image.poster_path}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Grid>

          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </div>
=======
  const images = data.posters 
  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    </>
  );
};

<<<<<<< HEAD
export default TemplateMoviePage;
=======
export default TemplateMoviePage;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
