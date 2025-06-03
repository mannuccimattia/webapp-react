import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";
import StarsRating from "../components/StarsRating";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovie = () => {
    axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then(resp => {
      setMovie(resp.data);
    }).catch(err => {
      if (err.response && err.response.status === 404) {
        setMovie(undefined);
      } else {
        console.error(err);
      }
    });
  };

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <>
      <div className="row">
        {movie === null ? (
          <div className="col-12 text-center mt-5">
            <span className="loader"></span>
          </div>
        ) : movie === undefined ? (
          <div className="row mt-5">
            <div className="col-12 text-center text-secondary">
              <i className="fa-solid fa-face-sad-tear display-1 my-3"></i>
              <h4>404</h4>
              <span>Movie not found</span>
            </div>
          </div>
        ) : (
          <>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <img src={movie.image} alt="movie" className="rounded img-fluid" />
            </div>

            <div className="col-12 col-me-6 col-lg-8 mt-5 ps-4">
              <h2 className="text-success">{movie.title}</h2>
              <h5 className="text-secondary my-3"><em>"{movie.release_year}"</em></h5>
              <p className="text-success opaque">{movie.genre}</p>
              <p>{movie.abstract}</p>
            </div>

            <div className="col-12 mt-5 px-3 d-flex justify-content-between align-items-center text-success">
              <h3>Users reviews</h3>
              <div className="avg-vote d-flex">
                <div className="pe-3">Average vote:</div>
                <StarsRating vote={movie.average_vote} />
              </div>
            </div>

            <div className="row gy-4 mb-4">
              {movie.reviews.map(review => (
                <ReviewCard key={`review-${review.id}`} review={review} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default MovieDetail
