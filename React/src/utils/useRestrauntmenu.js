//custom hooks - It basically helps us to add modularity in project and add ease in our project...

import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useRestrauntMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + resId);

    const json = await data.json();
    setResMenu(json?.data);
  };

  return resMenu;
};

export default useRestrauntMenu;
