<<<<<<< HEAD
import SiteHeader from "./components/siteHeader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; // NEW
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; // NEW
import VideoPage from "./pages/videoPage.js"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // new in lab 3
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
<<<<<<< HEAD
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
=======
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
<<<<<<< HEAD
            <Route
              path="/movies/favourites"
              element={<FavouriteMoviesPage />}
            />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
            <Route path="/movies/video" element={<VideoPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
          </Routes>
=======
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}  />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}  />  {/* new route */}
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage />} /> {/* adding home button link */}
        <Route path="*" element={<Navigate to="/" replace />} /> {/* back to home page if none of yhe above used */}
        </Routes>
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById("root"));
=======

ReactDOM.render(<App />, document.getElementById("root")); // passing App to the DOM
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
