import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    useEffect((() => {
        fetchData();
    }), [])

    const fetchData = async () => {
        const data = await fetch("");

        const json = data.json;

        setResMenu(json);
    }
    return (
        <div className="container">
            <h1>Name</h1>
            <p>time</p>

            <div className="recommended">
                <h2>data - price of menu</h2>
            </div>
        </div>
    )
};

export default RestaurantMenu