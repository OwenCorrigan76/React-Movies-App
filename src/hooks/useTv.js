/* import { useEffect, useState } from "react";
import {getTvShows} from '../api/tmdb-api'

const useTv = id => {
  const [tv, setTv] = useState(null);
  useEffect(() => {
    getTvShows(id).then(movie => {
      setTv(tv);
    });
  }, [id]);
  return [tv, setTv];
};

export default useTv */