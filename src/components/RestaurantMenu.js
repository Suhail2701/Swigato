import Shimmer, { MenuShimmer} from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import menuImg from "../../public/menu.png";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";



const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    const resinfo = useRestaurantMenu(resId);

    const darkMode = useSelector((store) => store.darkMode);

    console.log(resinfo);

    if (resinfo === null) {
        return <MenuShimmer />
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
        resinfo?.data?.cards[isMobile ? 5 : 4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards.filter((c) => {
                return c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            }) || [];

    // console.log(categories);

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="min-h-screen dark:bg-c2 ">
                <div className="text-center py-10 ">
                    <div className="border border-x-4 border-y-2 border-yellow-400 dark:border-gray-400 w-2/12 mx-auto p-4 rounded-lg xs:w-9/12 xs:p-2 sm:w-5/12 md:w-5/12 lg:w-3/12">
                        <h1 className="font-bold  text-3xl my-3 xs:text-2xl sm:text-3xl dark:text-c3 ">{info?.name}</h1>
                        <p className=" text-lg my-2 xs:text-sm sm:text-lg dark:text-gray-500">{info?.avgRating}⭐ - {info?.costForTwoMessage}</p>
                        <p className="text-xl pb-4 xs:text-lg sm:text-xl dark:text-gray-500"><span className="font-bold text-xl mb-2">Cuisines: </span>{info?.cuisines.join(", ")}</p>
                    </div>
                    <img src={menuImg} alt="menu" className="mx-auto w-[190px] my-10 xs:w-[140px] sm:w-[190px]" />
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
            </div>
        </div>
    )
}

export default RestaurantMenu;