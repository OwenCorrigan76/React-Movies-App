// entry point to app

import SiteHeader from "./components/siteHeader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvShowPage from "./pages/tvDetailsPage";
import PopularActorsPage from "./pages/popularActorsPage";
import ActorsPage from "./pages/actorDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; // NEW
import SimilarMoviesPage from "./pages/similarMoviesPage"; // NEW
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; // NEW
import TvPage from "./pages/tvPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
// import LoginHeader from "./components/headerLogin"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <TvShowsContextProvider>
            <Routes>
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />

              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path='/movies/:id/similar' element={<SimilarMoviesPage />} />
              <Route
                path="/movies/top_rated"
                element={<TopRatedMoviesPage />}
              />

              <Route path="/tvShows/tv" element={<TvPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/actors/:id" element={<ActorsPage />} />
              <Route path="/tvShows/:id" element={<TvShowPage />} />
              <Route path="/person/popular" element={<PopularActorsPage />} />
              <Route path="/" element={<HomePage />} />
{/*             <Route path="/" element={<LoginPage />} />
 */}
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
            </Routes>
          </TvShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
