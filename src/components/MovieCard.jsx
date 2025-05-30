import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, year, plot, image } = movie;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card bg-dark shadow">
        <div className="card-image-top">
          <img src={image} alt={title} className="rounded-top img-fluid" />
        </div>
        <div className="card-body bg-dark text-white">
          <h2 className="fw-semibold ">{title}</h2>
          <h5 className="fw-meidum text-secondary"><em>{year}</em></h5>
          <p>{plot}</p>
          <Link to={`/movies/${id}`} className="btn btn-outline-primary text-white">Find out more</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
