import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + resId);

    const json = await data.json();
    setResMenu(json?.data);
  };

    const {text} = resMenu?.data?.cards[0]?.card?.card?.text;


const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
?.card?.itemCards[3]?.card.info;
//   console.log(resMenu)

  return (
    <div className="container">
      <h1>{text}</h1>/

      <div className="recommended">
        {itemCards.map((item) => {
          <li key={item.info.id}>
            {item.info.name}-Rs.
            {item.info.price / 100 || item.info.defaultPrice / 100}
          </li>
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
