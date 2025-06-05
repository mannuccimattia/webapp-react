import axios from "axios";
import { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard";
import GeneralContext from "../contexts/generalContext";

const HomePage = () => {

  // state variables
  const [movies, setMovies] = useState(null);
  const { setIsLoading } = useContext(GeneralContext);
  const [search, setSearch] = useState("");

  // function for searching movie from searchbar
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // function for submitting search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  // function for fetching movies from db
  const fetchMovies = () => {
    setIsLoading(true);

    const url = (
      !search
        ? "http://127.0.0.1:3000/api/movies"
        : "http://127.0.0.1:3000/api/movies?search=" + search
    );

    axios.get(url).then(resp => {
      setTimeout(() => {
        setMovies(resp.data);
        setIsLoading(false);
      }, 1000);
    }).catch(err => console.log(err));
  };

  // effect for calling fetchMovies on mount
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

      <div className="row gy-4 my-3">
        <div className="col-12">
          <form id="search" onSubmit={handleSearchSubmit}>
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control border border-2 border-success rounded-0 rounded-start"
                placeholder="Search by Title"
                value={search}
                onChange={handleSearch}
              />
              <button className="btn btn-success rounded-0 rounded-end" type="submit">Search</button>
            </div>
          </form>
        </div>

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
