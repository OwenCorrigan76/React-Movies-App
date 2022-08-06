import React from "react";
import MovieDetails from "../components/movieDetails";
import SampleMovie from "./sampleData";
<<<<<<< HEAD
=======
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
<<<<<<< HEAD
};

export const Basic = () => <MovieDetails movie={SampleMovie} />;
Basic.storyName = "Default";
=======
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieDetails movie={SampleMovie} />;

Basic.storyName = "Default";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
