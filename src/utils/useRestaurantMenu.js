import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { PROXY_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResinfo] = useState(null);

    const url = `${PROXY_URL}${MENU_API}${resId}`;
    console.log(url);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetch(url);
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