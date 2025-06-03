import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

const HomePage = () => {

  const [movies, setMovies] = useState(null);

  const fetchMovies = () => {
    axios.get("http://127.0.0.1:3000/api/movies").then(resp => {
      setMovies(resp.data);
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>BoolFlix</h1>
      <hr />
      <div className="row gy-4 mt-5">

        {movies === null ? (
          <div className="col-12 text-center mt-5">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            {movies.map(movie => (
              <MovieCard key={`movie-${movie.id}`} movie={movie} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default HomePage
