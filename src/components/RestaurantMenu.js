import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import menuImg from "../../public/menu.png";
import { isMobile } from "react-device-detect";


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    const resinfo = useRestaurantMenu(resId);

    console.log(resinfo);

    if (resinfo === null) {
        return <Shimmer />
    }



    // const { name, cuisines, costForTwoMessage } = resinfo?.data?.cards[2]?.card?.card?.info;
    const info = resinfo?.data?.cards[2]?.card?.card?.info;
    // console.log(info);
    // const { itemCards } = resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // const categories = resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => { 
    //     return c?.card?.card?.["@type"] === 
    // "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    // })

    const categories =
        resinfo?.data?.cards[isMobile?5:4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards.filter((c) => {
                return c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            }) || [];

    // console.log(categories);

    return (
        <div className="text-center my-10 ">
            <div className="border border-x-4 border-y-2 border-yellow-400 w-2/12 mx-auto p-4 rounded-lg">
                <h1 className="font-bold  text-3xl my-3">{info?.name}</h1>
                <p className=" text-lg my-2">{info?.avgRating}⭐ - {info?.costForTwoMessage}</p>
                <p className="text-xl pb-4"><span className="font-bold text-xl mb-2">Cuisines: </span>{info?.cuisines.join(", ")}</p>
            </div>
            <img src={menuImg} alt="menu" className="mx-auto w-[190px] my-10"/>
            {/* {categories accordian} */}
            {
                categories.map((category, index) =>
                    <RestaurantCategory
                        key={index}
                        title={category?.card?.card?.title}
                        data={category?.card?.card?.itemCards}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}

                    />)
            }
        </div>
    )
}

export default RestaurantMenu;