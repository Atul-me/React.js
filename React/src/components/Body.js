import { useEffect, useState } from "react";
// import { ResData } from "../utils/ResData";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRes, setListRes] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

    const json = await data.json();
    setListRes(json?.data?.cards[2]?.data?.data?.cards);
  };
  return listRes.length === 0 ? <Shimmer /> :  (
    <div className="body">
      {/* <div className="search">
                search
            </div> */}
      <div className="filter">
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
        {listRes.map((rest) => (
          <Rescard key={rest.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
