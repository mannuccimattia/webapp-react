const StarsRating = ({ vote }) => {

  const renderStars = () => {

    return [1, 2, 3, 4, 5].map((_, i) => {

      return <i
        key={`stars-avg-${i}`}
        className={`fa-star text-warning ${i < vote ? 'fa-solid' : 'fa-regular'}`}
      ></i>;
    });
  };

  return (
    <div className="me-3">
      {renderStars()}
    </div>
  )
}

export default StarsRating
