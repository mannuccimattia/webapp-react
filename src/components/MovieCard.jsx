import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, release_year, abstract, image } = movie;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card on-hover bg-dark">
        <div className="card-image-top">
          <img src={image} alt={title} className="rounded-top img-fluid" />
        </div>
        <div className="card-body rounded-bottom text-success">
          <h2 className="fw-semibold">{title}</h2>
          <h5 className="fw-meidum text-secondary"><em>"{release_year}"</em></h5>
          <p className="opaque px-1">{abstract}</p>
          <Link to={`/movies/${id}`} className="btn btn-outline-success opaque">Find out more</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
