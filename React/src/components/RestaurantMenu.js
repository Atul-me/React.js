import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntmenu";

const RestaurantMenu = () => {
  const { resId } = useParams();


  const resMenu = useRestrauntMenu(resId);

  console.log(resMenu.data.cards[0]);

  // const { text } = resMenu?.data?.cards[0]?.card?.card?.text;

  // const { itemCards } =
  //   resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards[3]?.card.info;
  //   console.log(resMenu)

  return (
    <div className="container">
      {/* <h1>{text}</h1>/ */}
      
    </div>
  );
};

export default RestaurantMenu;
