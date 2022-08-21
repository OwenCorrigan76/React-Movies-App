import React from "react";
import TvShowsHeader from "../components/headerTvList";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Home Page/TvPageHeader",
  component: TvShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => <TvShowsHeader title="Discover Tv Shows" />;

Basic.storyName = "Default";
