import axios from "axios";
import { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard";
import GeneralContext from "../contexts/generalContext";

const HomePage = () => {

  const [movies, setMovies] = useState(null);

  const { setIsLoading } = useContext(GeneralContext);

  const fetchMovies = () => {
    setIsLoading(true);

    axios.get("http://127.0.0.1:3000/api/movies").then(resp => {
      setTimeout(() => {
        setMovies(resp.data);
        setIsLoading(false);
      }, 1000);
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <h1 className="text-success">Today's Movies</h1>
          <div>
            <img src="../src/assets/imgs/bg_parrot.png" alt="parrot" id="title-image" />
          </div>
        </div>
      </div>

      <div className="row gy-4 mt-3">

        {movies === null ? (
          <div className="col-12 text-center mt-5 text-secondary">
            Loading
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
