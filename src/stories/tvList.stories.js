import React from "react";
import TvList from "../components/tvList";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Home Page/TvList",
  component: TvList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  const tv = [
    { ...SampleTv, id: 1 },
    { ...SampleTv, id: 2 },
    { ...SampleTv, id: 3 },
    { ...SampleTv, id: 4 },
    { ...SampleTv, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvList
        tvShows={tv}
        action={(tv) => <AddToFavoritesIcon tv={tv} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
