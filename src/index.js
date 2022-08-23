// entry point to app
import React from "react";
import SiteHeader from "./components/siteHeader";
import SiteFooter from "./components/siteFooter";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvShowPage from "./pages/tvDetailsPage";
import PopularActorsPage from "./pages/popularActorsPage";
import ActorsPage from "./pages/actorDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteTvShowsPage from "./pages/favouriteTvShowsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TvPage from "./pages/tvPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import AddTvReviewPage from "./pages/addTvReviewPage";
import AuthProvider from "./contexts/authContext";
import ProtectedRoute from "./components/protectedRoute";
import LoginPage from "./pages/loginPage";
// import LogoutPage from "./pages/logoutPage";

const queryClient = new QueryClient({
  // for caching
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
        <AuthProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <TvShowsContextProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route
                  path="/movies/favourites"
                  element={<FavouriteMoviesPage />}
                />
                <Route
                  path="/movies/upcoming"
                  element={
                    <ProtectedRoute>
                      <UpcomingMoviesPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/movies/:id/similar"
                  element={<SimilarMoviesPage />}
                />
                <Route
                  path="/movies/top_rated"
                  element={
                    <ProtectedRoute>
                      <TopRatedMoviesPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route
                  path="/tvShows/favourites"
                  element={<FavouriteTvShowsPage />}
                />
                <Route path="/login" element={<LoginPage />} />
                {/*               <Route path="/logout" element={<LogoutPage />} /> */}
                <Route path="/tvShows/:id" element={<TvShowPage />} />
                <Route
                  path="/tvShows/tv"
                  element={
                    <ProtectedRoute>
                      <TvPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/reviewsTv/form" element={<AddTvReviewPage />} />
                <Route path="/actors/:id" element={<ActorsPage />} />
                <Route
                  path="/person/popular"
                  element={
                    <ProtectedRoute>
                      <PopularActorsPage />
                    </ProtectedRoute>
                  }
                />
                {/*             <Route path="/" element={<LoginPage />} />
                 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </TvShowsContextProvider>
          </MoviesContextProvider>
          <SiteFooter />
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
