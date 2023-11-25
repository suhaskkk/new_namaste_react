import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restoData, setRestoData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filterSearchData, setFilterSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();
      const restaurants =
        res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestoData(restaurants);
      setFilterSearchData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterData = () => {
    const filterData = restoData.filter((el) => el?.info?.avgRating > 4.0);
    setFilterSearchData(filterData);
    console.log("top", filterData);
  };

  const handleSearchData = () => {
    const filterSearchData = restoData.filter((el) =>
      el?.info?.name?.toLowerCase().includes(searchData.trim().toLowerCase())
    );
    setFilterSearchData(filterSearchData);
  };

  const setSearch = (e) => {
    setSearchData(e.target.value);
  };

  console.log("searchData", restoData);

  return restoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="below_header">
        <div className="search-container">
          <input
            type="text"
            placeholder="search-box"
            value={searchData}
            onChange={setSearch}
          />
          <button onClick={handleSearchData}>Search</button>
        </div>
        <button onClick={handleFilterData}>Top Rated Restaurants</button>
      </div>
      <div className="food_card_container">
        {filterSearchData.map((restaurant) => (
          <FoodCard key={restaurant.id} resCard={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
