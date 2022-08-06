import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";
<<<<<<< HEAD
=======
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
<<<<<<< HEAD
=======
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
};

export const Basic = () => {
  return (
    <MovieCard
      movie={SampleMovie}
<<<<<<< HEAD
=======
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
<<<<<<< HEAD
    />
  );
};
Exceptional.storyName = "exception";
=======
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
