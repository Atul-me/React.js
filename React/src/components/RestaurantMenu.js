import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntmenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestrauntMenu(resId);

  const { text } = resMenu?.data?.cards[0]?.card?.card?.text;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[3]?.card.info;
  //   console.log(resMenu)

  return (
    <div className="container">
      <h1>{text}</h1>/
      <div className="recommended">
        {itemCards.map((item) => {
          <li key={item.info.id}>
            {item.info.name}-{"Rs."}
            {item.info.price / 100 || item.info.defaultPrice / 100}
          </li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
