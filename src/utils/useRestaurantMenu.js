import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResinfo] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetch(MENU_API + resId);
                const json = await data.json();
                setResinfo(json);
            } catch (err) {
                console.log("Error in Fetching!!")
            }
        }

        fetchData();
    }, []);

    return resInfo;
}

export default useRestaurantMenu;