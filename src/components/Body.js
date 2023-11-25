import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restoData, setRestoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    const restaurants =
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestoData(restaurants);
  };

  const handleTopRatedClick = () => {
    const filteredData = restoData.filter((el) => el?.info?.avgRating > 4.0);
    setRestoData(filteredData);
    console.log("filteredData", restoData);
  };

  if (restoData.length == 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div>
        <div>
          <div>
            <button style={{ margin: "10px" }} onClick={handleTopRatedClick}>
              top rated restaurants
            </button>
          </div>
          <div className="food_card_container">
            {restoData.map((restaurant) => (
              <FoodCard key={restaurant.id} resCard={restaurant} />
            ))}
          </div>
        </div>
        <div className="food_card_container">
          {restoData.map((restaurant) => (
            <FoodCard key={restaurant.id} resCard={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
