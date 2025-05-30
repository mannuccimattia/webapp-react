const initialMovies = [
  {
    id: 1,
    title: "Titolo 1",
    year: 1994,
    plot: "Lorem ipsum dolor sit amet movi guardatum est",
    image: "https://picsum.photos/600/800",
    reviews: [
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 1",
        vote: 2
      },
      {
        id: 2,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 2",
        vote: 3
      },
      {
        id: 3,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 3",
        vote: 5
      }
    ]
  },
  {
    id: 2,
    title: "Titolo 2",
    year: 1954,
    plot: "Lorem ipsum dolor sit amet movi guardatum est",
    image: "https://picsum.photos/600/800",
    reviews: [
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 4",
        vote: 5
      },
      {
        id: 2,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 5",
        vote: 4
      },
      {
        id: 3,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 6",
        vote: 2
      }
    ]
  },
  {
    id: 3,
    title: "Titolo 3",
    year: 2022,
    plot: "Lorem ipsum dolor sit amet movi guardatum est",
    image: "https://picsum.photos/600/800",
    reviews: [
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 6",
        vote: 3
      },
      {
        id: 2,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 1",
        vote: 4
      },
      {
        id: 3,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 2",
        vote: 5
      }
    ]
  },
  {
    id: 4,
    title: "Titolo 4",
    year: 2008,
    plot: "Lorem ipsum dolor sit amet movi guardatum est",
    image: "https://picsum.photos/600/800",
    reviews: [
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 3",
        vote: 3
      },
      {
        id: 2,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 4",
        vote: 2
      },
      {
        id: 3,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 2",
        vote: 1
      }
    ]
  },
  {
    id: 5,
    title: "Titolo 5",
    year: 2011,
    plot: "Lorem ipsum dolor sit amet movi guardatum est",
    image: "https://picsum.photos/600/800",
    reviews: [
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 7",
        vote: 3
      },
      {
        id: 2,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 5",
        vote: 5
      },
      {
        id: 3,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 4",
        vote: 5
      }
    ]
  }
];


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";

const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(initialMovies);

  const [movie, setMovie] = useState(null)

  const findMovie = () => {
    const foundMovie = movies.find(mov => mov.id === parseInt(id));
    setMovie(foundMovie);
  }

  useEffect(() => {
    findMovie();
  }, [])

  return (
    <>
      <div className="row align-items-center">
        {movie === null ? (
          <div>Loading</div>
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
            </div>

            {movie.reviews.map(review => (
              <div className="row gy-3">
                <ReviewCard key={`review-${review.id}`} review={review} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default MovieDetail
