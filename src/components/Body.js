import FoodCard from "./FoodCard";
import { resData } from "../utils/restData";

const Body = () => {
    return (
      <div>
        <div>
          <h3>search</h3>
        </div>
        <div className="food_card_container">
          {resData.map((restaurant) => (
            <FoodCard key={restaurant.id} resCard={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;