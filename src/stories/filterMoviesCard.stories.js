import React from "react";
import FilterMoviesCard from "../components/filterMoviesCard";
<<<<<<< HEAD
=======
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

export default {
  title: "Home Page/FilterMoviesCard",
  component: FilterMoviesCard,
<<<<<<< HEAD
};

export const Basic = () => {
  return <FilterMoviesCard />;
=======
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return <FilterMoviesCard onUserInput={action("filter input")} />;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
};
Basic.storyName = "Default";
