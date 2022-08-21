import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Tv Shows Details Page/TvDetails",
  component: TvDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => <TvDetails tv={SampleTv} />;

Basic.storyName = "Default";
