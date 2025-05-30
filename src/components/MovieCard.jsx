const MovieCard = ({ movie }) => {
  const { title, year, plot, image } = movie;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <div className="card-image-top">
          <img src={image} alt={title} className="rounded img-fluid" />
        </div>
        <div className="card-body">
          <h2 className="fw-semibold text-primary">{title}</h2>
          <h5 className="fw-meidum text-secondary"><em>{year}</em></h5>
          <p>{plot}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
