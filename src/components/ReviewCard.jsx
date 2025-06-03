import StarsRating from "./StarsRating";

const ReviewCard = ({ review }) => {
  const { text, vote, name } = review;

  return (
    <div className="col-12">
      <div className="card bg-black text-success p-3">
        <p>{`" ${text} "`}</p>
        <StarsRating vote={vote} />
        <p className="mt-3">By: <em>{name}</em></p>
      </div>
    </div>
  )
}

export default ReviewCard
