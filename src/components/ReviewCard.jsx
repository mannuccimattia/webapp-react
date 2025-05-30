const ReviewCard = ({ review }) => {
  const { text, vote, author } = review;

  return (
    <div className="col-12">
      <div className="card bg-dark text-white p-3">
        <p>{text}</p>
        <p><strong>Vote: {vote}</strong></p>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default ReviewCard
