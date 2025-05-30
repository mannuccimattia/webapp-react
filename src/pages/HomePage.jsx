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
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 2",
        vote: 3
      },
      {
        id: 1,
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
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 5",
        vote: 4
      },
      {
        id: 1,
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
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 1",
        vote: 4
      },
      {
        id: 1,
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
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 4",
        vote: 2
      },
      {
        id: 1,
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
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 5",
        vote: 5
      },
      {
        id: 1,
        text: "Lorem ipsum dolor amet sit",
        author: "Author 4",
        vote: 5
      }
    ]
  }
];


import { useState } from "react";

import MovieCard from "../components/MovieCard";

const HomePage = () => {

  const [movies, setMovies] = useState(initialMovies);

  return (
    <>
      <h1>BoolFlix</h1>
      <hr />
      <div className="row gy-4 mt-5">

        {movies.map(movie => (
          <MovieCard key={`movie-${movie.id}`} movie={movie} />
        ))}

      </div>
    </>
  )
}

export default HomePage
