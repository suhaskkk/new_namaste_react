import FoodCard from "./FoodCard";

import { useEffect, useState } from "react";


const Body = () => {

  const[restoData,setRestoData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const res = await data.json()
    console.log(res);
    setRestoData()
  }
    return (
      <div>
        <div>
          <button onClick={()=>{
            filterData = restoData.filter(el=>{
              return el.stars > 4.0
            })
            setRestoData(filterData)
          }}>
            top rated restaurants
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