import React from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";
<<<<<<< HEAD
=======
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
<<<<<<< HEAD
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;
Basic.storyName = "Default";
=======
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
