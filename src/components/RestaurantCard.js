import { CART_URL } from "../utils/constants";
import { Timer } from "lucide-react";
import { useSelector } from "react-redux";



const RestaurantCard = (props) => {

    const darkMode = useSelector((store) => store.darkMode)

    const { resList } = props;

    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = resList?.info;

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="m-4 w-[250px] h-[320px]  rounded-md  overflow-hidden hover:shadow-2xl transition-shadow duration-300  xs:w-[150px] xs:h-[240px] sm:w-[150px] sm:h-[240px] md:w-[250px] md:h-[320px] xs:m-2 sm:m-2 md:m-4 dark:hover:bg-c4">
                <img className=" object-cover object-center w-full h-48 rounded-lg xs:h-28 sm:h-28 md:h-48  " alt="res-logo" src={CART_URL + cloudinaryImageId} />
                <div className="p-4 " >
                    <h3 className="font-bold  text-2xl py-1 truncate max-md:text-xl xs:text-xl sm:text-xl md:text-2xl dark:text-c3 ">{name}</h3>
                    <h4 className="truncate text-gray-600 xs:text-sm sm:text-sm md:text-lg dark:text-gray-500">{cuisines.join(", ")}</h4>
                    <div className="flex justify-between mb-4">
                        <p className="my-1 py-2 ">
                            <h4><span className="text-yellow-600 xs:text-xs sm:text-xs md:text-sm">{avgRating}</span> ⭐</h4>
                        </p>
                        {/* <h4>{costForTwo}</h4> */}
                        <p className="flex items-center my-1 py-2 xs:text-xs sm:text-xs md:text-sm dark:text-gray-400">
                            <Timer size={16} className="mr-1" />
                            <h4>{sla.deliveryTime} mins</h4>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}



//Higher Order Component
//input-    RestauratCard => RestaurantCardPramoted
export const withPromtedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Opened
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };

}

export default RestaurantCard;