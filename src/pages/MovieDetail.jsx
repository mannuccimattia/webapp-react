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
    }).catch(err => console.log(err));
  };

  // const findMovie = () => {
  //   const foundMovie = movies.find(mov => mov.id === parseInt(id));
  //   setMovie(foundMovie);
  // }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <>
      <div className="row align-items-center">
        {movie === null ? (
          <div className="col-12 text-center mt-5">
            <span className="loader"></span>
          </div>
        ) : movie === undefined ? (
          <div>Movie not Found</div>
        ) : (
          <>
            <div className="col-12 col-md-6 col-lg-4">
              <img src={movie.image} alt="movie" className="rounded img-fluid" />
            </div>

            <div className="col-12 col-me-6 col-lg-8 text-center">
              <h2>{movie.title}</h2>
              <h5 className="my-3"><em>{movie.year}</em></h5>
              <p>{movie.plot}</p>
            </div>

            <div className="col-12 mt-5">
              <h3>Users reviews</h3>
              <div className="avg-vote d-flex">
                <div>Average</div>
                <StarsRating vote={movie.average_vote} />
              </div>
            </div>

            <div className="row gy-3">
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
