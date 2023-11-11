

const FoodCard = (props) => {
  const { resCard } = props;
  const { resName, cuisine, stars, time, img } = resCard;
  return (
    <div className="card_size">
      <img className="card_logo" src={img} alt="" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default FoodCard;
