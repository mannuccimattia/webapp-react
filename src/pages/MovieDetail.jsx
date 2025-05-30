const MovieDetail = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img src="https://picsum.photos/500" alt="movie" className="rounded img-fluid" />
        </div>

        <div className="col-12 col-me-6 col-lg-8">
          <h2>Title</h2>
          <h5><em>Genres</em></h5>
          <p>Plot</p>
        </div>

      </div>

      <div className="row">
        <div className="col-12 my-4">
          <h3>Reviews</h3>
        </div>

        <div className="col-12">
          <div className="card">
            <p>Review</p>
            <p>Vote</p>
            <p>Author</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetail
