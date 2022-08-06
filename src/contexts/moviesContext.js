import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
<<<<<<< HEAD
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top_rated, setTopRated] = useState([]);
  const [video, setVideo] = useState([]);
=======
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ) 
  // const [mustWatch, setMustWatch] = useState({})
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };
<<<<<<< HEAD

=======
  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch= [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
  }
};
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };
<<<<<<< HEAD

  const addToUpcoming = (movie) => {
    if (!upcoming.includes(movie.id)) {
      let newUpcoming = [...upcoming, movie.id];
      setUpcoming(newUpcoming);
    }
  };
  const addToTopRated = (movie) => {
    if (!top_rated.includes(movie.id)) {
      let newTopRated = [...top_rated, movie.id];
      setTopRated(newTopRated);
    }
  };

  const addToVideo = (movie) => {
    if (!video.includes(movie.id)) {
      let newVideo = [...video, movie.id];
      setVideo(newVideo);
    }
  };
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
    }
  };
=======
const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  

>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
<<<<<<< HEAD
        upcoming,
        addToUpcoming,
        top_rated,
        addToTopRated,
        addReview,
        mustWatch,
        addToMustWatch,
        video,
        addToVideo,
=======
        addReview,
        mustWatch,
        addToMustWatch,
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

<<<<<<< HEAD
export default MoviesContextProvider;
=======
export default MoviesContextProvider;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
