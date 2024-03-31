import { useState } from "react";
import { ResData } from "../utils/ResData";
import Rescard from "./Rescard";

const Body = () => {
  const [listRes, setListRes] = useState([ResData.data[3]]);
  return (
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
