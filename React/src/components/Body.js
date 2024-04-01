import { useEffect, useState } from "react";
// import { ResData } from "../utils/ResData";
import ResCard from "./Rescard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log( json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  
  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="text-area"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            const filterP = listRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filterP);
          }}>Search</button>
        </div>
        <button
          onClick={() => {
            const filteredList = listRes.filter(
              (res) => res.data.avgRating > 4
            );
            setListRes(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((rest) => (
          <ResCard key={rest.info.id} resData={rest} />
        ))}
        {/* {listRes.map((rest) => (
          <ResCard key={rest.info.id} resData={rest} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;


// const list = [ {
//   type: 'restaurant',
//   data: {
//     id: '334475',
//     name: 'KFC',
//     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//     costForTwo: 40000,
//     deliveryTime: 36,
//     avgRating: '3.8',
//   },
// },
// {
//   type: 'restaurant',
//   data: {
//     id: '334476',
//     name: 'Dominos',
//     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//     costForTwo: 40000,
//     deliveryTime: 36,
//     avgRating: '4.8',
//   },
// },
// {
//   type: 'restaurant',
//   data: {
//     id: '334477',
//     name: 'McDonals',
//     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//     costForTwo: 40000,
//     deliveryTime: 36,
//     avgRating: '4.2',
//   },
// },
// ];
