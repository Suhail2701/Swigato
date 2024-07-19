import { CART_URL } from "../utils/constants";
import { Timer } from "lucide-react";



const RestaurantCard = (props) => {
    const { resList } = props;

    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = resList?.info;
    return ( 
        <div className="m-4 w-[250px] h-[320px]  rounded-md  overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-lg:w-[200px] max-lg:h-[275px] max-md:w-[170px] max-md:h-[210px] max-smx:w-[150px] max-smx:h-[200px]">
            <img className="object-cover object-center w-full h-48 rounded-lg max-lg:h-36 max-md:h-24 max-smx:h-22" alt="res-logo" src={CART_URL + cloudinaryImageId} />
            <div className="p-4 " >
                <h3 className="font-bold  text-2xl py-1 truncate max-md:text-xl ">{name}</h3>
                <h4 className="truncate text-gray-600">{cuisines.join(", ")}</h4>
                <div className="flex justify-between mb-4">
                    <p className="my-1 py-2">
                        <h4><span className="text-yellow-600">{avgRating}</span> ⭐</h4>
                    </p>
                    {/* <h4>{costForTwo}</h4> */}
                    <p className="flex items-center my-1 py-2">
                        <Timer size={16} className="mr-1" />
                        <h4>{sla.deliveryTime} mins</h4>
                    </p>

                </div>
            </div>
        </div>
    );
}



//Higher Order Component
//input-    RestauratCard => RestaurantCardPramoted
export const withPromtedLable= (RestaurantCard) => {
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