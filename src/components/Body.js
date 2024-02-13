import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResList from "../utils/useResList";

const Body = () => {
  
  const [searchData, setSearchData] = useState("");
  
  const {restoData,filterSearchData}  = useResList();

  console.log(restoData,"restoData")

  const handleFilterData = () => {
    const filterData = restoData.filter((el) => el?.info?.avgRating > 4.0);
    setFilterSearchData(filterData);
    console.log("top",filterData)
  };

  const handleSearchData = () => {
    const filterSearchData = restoData.filter((el) => el?.info?.name?.toLowerCase().includes(searchData.trim().toLowerCase()));
    setFilterSearchData(filterSearchData);
  };

  const setSearch = (e) =>{
    setSearchData(e.target.value)
  }
  
  console.log("searchData", restoData)



  return restoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="below_header">
        <div className="search-container">
          <input type="text" placeholder="search-box" value={searchData} onChange={setSearch} />
          <button onClick={handleSearchData}>Search</button>
        </div>
        <button onClick={handleFilterData}>Top Rated Restaurants</button>
      </div>
      <div className="food_card_container">
        {filterSearchData.map((restaurant) => (
          <FoodCard key={restaurant.info.id} resCard={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
