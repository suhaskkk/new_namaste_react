import { CDN_URL } from "../utils/constants";

const FoodCard = ({ resCard }) => {
  // const { resCard } = props;
  const { info } = resCard || {};
  const {
    cloudinaryImageId,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = info;
  return (
    <div className="card_size">
      <img
        className="card_logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{areaName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default FoodCard;
