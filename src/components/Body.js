import FoodCard from "./FoodCard";
import { resData } from "../utils/restData";
import { useState } from "react";

const Body = () => {
  const [restoData, setRestoData] = useState(resData);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            let filterdata = restoData.filter((el) => {
              return el.stars > 4;
            });
            setRestoData(filterdata);
          }}
        >
          highest ratings
        </button>
      </div>
      <div className="food_card_container">
        {restoData.map((restaurant) => (
          <FoodCard key={restaurant.id} resCard={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
