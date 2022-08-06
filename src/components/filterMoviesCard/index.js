<<<<<<< HEAD
import React from "react";
=======
import React from "react";  // useState/useEffect redundant 
// import React, {useState, useEffect}  from "react"; // changes React import to fascilitate hook functions
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getGenres } from "../../api/tmdb-api"; // import getGenres from api
<<<<<<< HEAD

import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  // hook function
=======
import { useQuery } from "react-query";
import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({  // hook function 
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
<<<<<<< HEAD
  if (genres[0].name !== "All") {
=======
  if (genres[0].name !== "All"){
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };
  return (
    <>
<<<<<<< HEAD
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField /* refactored */
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select /*  also refactored */
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
=======
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField  /* refactored */
         className={classes.formControl}
         id="filled-search"
         label="Search field"
         type="search"
         value={props.titleFilter}
         variant="filled"
         onChange={handleTextChange}
    />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select  /*  also refactored */
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
    >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
<<<<<<< HEAD
    </>
  );
}
=======
      </>
  );
}
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
