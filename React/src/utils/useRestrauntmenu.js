//custom hooks - It basically helps us to add modularity in project and add ease in our project...

import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useRestrauntMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);

    const json = await data.json();
    setResMenu(json?.data);
    console.log(json?.data)
  };

  return resMenu;
};

export default useRestrauntMenu;
