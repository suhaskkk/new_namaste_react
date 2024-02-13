import React, { useEffect, useState } from 'react'
import { RES_MENU_API } from './constants';


const useResList = () => {
    const [restoData, setRestoData] = useState([]);
    const [filterSearchData, setFilterSearchData] = useState([]);


    const fetchData = async () => {
        try {
          const data = await fetch(
            RES_MENU_API
          );
          const res = await data.json();
          console.log(res,"resUh")
          const restaurants =
            res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          setRestoData(restaurants);
          setFilterSearchData(restaurants)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);
      
  return {restoData,filterSearchData}
  
}

export default useResList